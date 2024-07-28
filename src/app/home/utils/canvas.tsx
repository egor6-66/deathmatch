import React, { useEffect, useRef } from 'react';
import { HemisphericLight, SceneLoader, Vector3 } from '@babylonjs/core';
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
    const pageWithSwitch = pathname.split('/')[3].toUpperCase() as Pages;

    useEffect(() => {
        if (!initCameraPosition.current) {
            if (pageWithSwitch in coords && camera) {
                camera.position.x = coords[pageWithSwitch].x;
                camera.position.y = coords[pageWithSwitch].y;
                initCameraPosition.current = true;
            }
        }
    }, [camera, pathname]);

    useEffect(() => {
        wallIsReady.set(false);
        SceneLoader.ImportMeshAsync('', '/wall/', 'wall.glb').then(() => {
            scene && new HemisphericLight('hemi', new Vector3(0, 4, 0), scene);
            wallIsReady.set(true);
        });
    }, [scene]);

    useEffect(() => {
        if (!isFirstMount && scene) {
            smoothMovement({ scene, speed: 0.08, coords: canvasCoords.value });
        }
    }, [pageWithSwitch]);

    return <BabylonCanvas />;
};

export default Canvas;
