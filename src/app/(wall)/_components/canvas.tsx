import { useEffect, useRef } from 'react';
import { HemisphericLight, SceneLoader, Vector3 } from '@babylonjs/core';

import babylon, { cameraFixed, smoothMovement } from '@/shared/babylon';
import { paths } from '@/shared/constants';
import { useFirstMount } from '@/shared/hooks';

import '@babylonjs/loaders';

const twoLvl = -0.4;
const oneLvl = -2.8;
const z = -7.7;

type Page = paths.HomePagesTypes | paths.AuthPagesTypes;

const canvasCoords: Record<Page, IVector3> = {
    MY_SERVERS: { x: -3, y: twoLvl, z },
    FIND_SERVERS: { x: -3, y: twoLvl, z },
    CREATE_SERVER: { x: -3, y: twoLvl, z },
    MAIN: { x: 0, y: twoLvl, z },
    SETTINGS: { x: 3, y: twoLvl, z },
    LOGIN: { x: 1.9, y: oneLvl, z },
    REGISTRATION: { x: -1.9, y: oneLvl, z },
};

const Canvas = ({ page, setWallIsReady }: { page?: Page; setWallIsReady: (value: boolean) => void }) => {
    const { BabylonCanvas, scene, camera, engine } = babylon();

    const isFirstMount = useFirstMount();
    const initCameraPosition = useRef(false);

    useEffect(() => {
        if (!initCameraPosition.current) {
            const p = page || (window.location.pathname.split('/')[2].toUpperCase() as Page);

            if (p in canvasCoords && camera) {
                camera.position.x = canvasCoords[p]?.x || 0;
                camera.position.y = canvasCoords[p]?.y || 0;
                camera.position.z = canvasCoords[p]?.z || z;
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
        if (!isFirstMount && scene && camera && page) {
            smoothMovement({ camera, scene, frameEnd: 40, coords: canvasCoords[page as Page] as Vector3 });
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

export default Canvas;
