import React, { useEffect, useRef } from 'react';
import { AbstractMesh, Camera, HemisphericLight, SceneLoader, Vector3 } from '@babylonjs/core';
import { usePathname } from 'next/navigation';

import babylon, { smoothMovement } from '@/shared/babylon';
import { useFirstMount } from '@/shared/hooks';

import '@babylonjs/loaders';

import coords, { Pages } from './coords';
import navigationStore from './store';

const Canvas = () => {
    const canvasCoords = navigationStore.use.canvasCoords();
    const wallIsReady = navigationStore.use.wallIsReady();
    const pathname = usePathname();
    const isFirstMount = useFirstMount();
    const initCameraPosition = useRef(false);
    const meshRef = useRef<AbstractMesh | null>(null);
    const { BabylonCanvas, scene, camera, engine } = babylon();
    const pageWithSwitch = pathname.split('/')[1].toUpperCase() as Pages;

    useEffect(() => {
        if (!initCameraPosition.current) {
            if (pageWithSwitch in coords && camera) {
                camera.position.x = coords[pageWithSwitch].x;
                camera.position.y = coords[pageWithSwitch].y;
                initCameraPosition.current = true;

                if (window.innerWidth > window.innerHeight) {
                    camera.fovMode = Camera.FOVMODE_HORIZONTAL_FIXED;
                } else {
                    camera.fovMode = Camera.FOVMODE_VERTICAL_FIXED;
                }
            }
        }
    }, [camera, pageWithSwitch]);

    useEffect(() => {
        wallIsReady.set(false);
        SceneLoader.ImportMeshAsync('', '/wall/', 'wall.glb').then((data) => {
            scene && new HemisphericLight('hemi', new Vector3(0, 4, 0), scene);
            wallIsReady.set(true);
            meshRef.current = data.meshes[0];
        });
    }, [scene]);

    useEffect(() => {
        if (!isFirstMount && scene) {
            smoothMovement({ scene, speed: 1, coords: canvasCoords.value });
        }
    }, [pageWithSwitch]);

    useEffect(() => {
        const setCameraPosition = () => {
            if (scene && camera) {
                engine?.resize();

                if (window.innerWidth > window.innerHeight) {
                    camera.fovMode = Camera.FOVMODE_HORIZONTAL_FIXED;
                } else {
                    camera.fovMode = Camera.FOVMODE_VERTICAL_FIXED;
                }
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
