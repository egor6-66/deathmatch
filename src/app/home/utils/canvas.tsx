import React, { useEffect, useRef } from 'react';
import { SceneLoader } from '@babylonjs/core';
import { usePathname } from 'next/navigation';

import babylon, { smoothMovement } from '@/shared/babylon';
import { useFirstMount } from '@/shared/hooks';

import '@babylonjs/loaders';

import coords, { Pages } from './coords';
import navigationStore from './store';

const Canvas = () => {
    const canvasCoords = navigationStore.use.canvasCoords();
    const pathname = usePathname();
    const isFirstMount = useFirstMount();
    const initCameraPosition = useRef(false);
    const { BabylonCanvas, scene, camera } = babylon();

    useEffect(() => {
        if (!initCameraPosition.current) {
            const page = pathname.split('/').pop()?.toUpperCase() as Pages;

            if (page in coords && camera) {
                camera.position.x = coords[page].x;
                camera.position.y = coords[page].y;
                initCameraPosition.current = true;
            }
        }
    }, [camera]);

    useEffect(() => {
        SceneLoader.ImportMeshAsync('', '/wall/', 'wall.glb');
    }, []);

    useEffect(() => {
        if (!isFirstMount && scene) {
            smoothMovement({ scene, speed: 0.08, coords: canvasCoords.value });
        }
    }, [pathname]);

    return <BabylonCanvas />;
};

export default Canvas;
