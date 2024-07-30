import React, { useEffect, useRef } from 'react';
import { HemisphericLight, SceneLoader, Vector3 } from '@babylonjs/core';

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

const coords: Record<Pages, ICoords> = {
    SERVER: { x: -3, y: twoLvl, z },
    MAIN: { x: 0, y: twoLvl, z },
    SETTINGS: { x: 3, y: twoLvl, z },
    LOGIN: { x: 1.9, y: oneLvl, z },
    REGISTRATION: { x: -1.9, y: oneLvl, z },
};

const Canvas = ({ page, setWallIsReady }: { page: Pages; setWallIsReady: (value: boolean) => void }) => {
    const { BabylonCanvas, scene, camera, engine } = babylon();

    const isFirstMount = useFirstMount();
    const initCameraPosition = useRef(false);

    useEffect(() => {
        if (!initCameraPosition.current) {
            if (page in coords && camera) {
                camera.position.x = coords[page as Pages].x;
                camera.position.y = coords[page as Pages].y;
                camera.position.z = coords[page as Pages].z;
                initCameraPosition.current = true;
                cameraFixed(camera, window.innerWidth, window.innerHeight);
            }
        }
    }, [camera]);

    useEffect(() => {
        setWallIsReady(false);
        SceneLoader.ImportMeshAsync('', '/wall/', 'wall.glb').then(() => {
            scene && new HemisphericLight('hemi', new Vector3(0, 4, 0), scene);
            setWallIsReady(true);
        });
    }, [scene]);

    useEffect(() => {
        if (!isFirstMount && scene && camera) {
            smoothMovement({ camera, scene, frameEnd: 40, coords: coords[page as Pages] });
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

export type { Pages };
export default Canvas;
