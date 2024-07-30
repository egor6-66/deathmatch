import React, { useEffect, useRef } from 'react';
import useZustand from 'react-use-zustand';
import { Camera, HemisphericLight, SceneLoader, Vector3 } from '@babylonjs/core';
import { usePathname } from 'next/navigation';

import babylon, { cameraFixed, smoothMovement } from '@/shared/babylon';
import { paths } from '@/shared/constants';
import { useFirstMount } from '@/shared/hooks';

import '@babylonjs/loaders';

interface ICoords {
    x: number;
    y: number;
    z: number;
}
const twoLvl = -0.4;
const oneLvl = -2.8;
const z = -7.7;

type Pages = keyof typeof paths.home;

interface IStore {
    page: Pages;
    wallIsReady: boolean;
}

const coords: Record<Pages, ICoords> = {
    SERVER: { x: -3, y: twoLvl, z },
    MAIN: { x: 0, y: twoLvl, z },
    OPTIONS: { x: 3, y: twoLvl, z },
    LOGIN: { x: 1.9, y: oneLvl, z },
    REGISTRATION: { x: -1.9, y: oneLvl, z },
};

const homePagesStore = useZustand<IStore>({
    keys: ['page', 'wallIsReady'],
    default: {
        page: window.location.pathname.split('/')[1].toUpperCase() as Pages,
        wallIsReady: false,
    },
});

const Canvas = () => {
    const { BabylonCanvas, scene, camera, engine } = babylon();

    const page = homePagesStore.use.page().value;
    const wallIsReady = homePagesStore.use.wallIsReady();
    const isFirstMount = useFirstMount();
    const initCameraPosition = useRef(false);

    useEffect(() => {
        if (!initCameraPosition.current) {
            if (page in coords && camera) {
                camera.position.x = coords[page].x;
                camera.position.y = coords[page].y;
                camera.position.z = coords[page].z;
                initCameraPosition.current = true;
                cameraFixed(camera, window.innerWidth, window.innerHeight);
            }
        }
    }, [camera]);

    useEffect(() => {
        wallIsReady.set(false);
        SceneLoader.ImportMeshAsync('', '/wall/', 'wall.glb').then((data) => {
            scene && new HemisphericLight('hemi', new Vector3(0, 4, 0), scene);
            wallIsReady.set(true);
        });
    }, [scene]);

    useEffect(() => {
        if (!isFirstMount && scene && camera) {
            smoothMovement({ camera, scene, frameEnd: 25, coords: coords[page] });
        }
    }, [page]);

    useEffect(() => {
        const setCameraPosition = () => {
            if (scene && camera) {
                engine?.resize();
                cameraFixed(camera, window.innerWidth, window.innerHeight);
            }
        };

        window.addEventListener('resize', setCameraPosition);

        return () => {
            window.removeEventListener('resize', setCameraPosition);
        };
    }, [camera]);

    return <BabylonCanvas />;
};

export { homePagesStore };

export default Canvas;
