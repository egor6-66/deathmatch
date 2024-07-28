import React, { useEffect, useRef } from 'react';
import { AbstractMesh, SceneLoader } from '@babylonjs/core';
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
    const { BabylonCanvas, scene, camera } = babylon();
    const animationTrigger = pathname.split('/')[3];

    useEffect(() => {
        if (!initCameraPosition.current) {
            const page = pathname.split('/').pop()?.toUpperCase() as Pages;

            if (page in coords && camera) {
                camera.position.x = coords[page].x;
                camera.position.y = coords[page].y;
                initCameraPosition.current = true;
            }
        }
    }, [camera, pathname]);

    useEffect(() => {
        wallIsReady.set(false);
        SceneLoader.ImportMeshAsync('', '/wall/', 'wall.glb').then(() => {
            wallIsReady.set(true);
        });
    }, [scene]);

    useEffect(() => {
        if (!isFirstMount && scene) {
            smoothMovement({ scene, speed: 0.08, coords: canvasCoords.value });
        }
    }, [animationTrigger]);

    return <BabylonCanvas />;
};

export default Canvas;
