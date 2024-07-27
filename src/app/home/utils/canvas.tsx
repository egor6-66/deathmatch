import React, { useEffect, useRef } from 'react';
import { SceneLoader } from '@babylonjs/core';
import { usePathname } from 'next/navigation';

import { useBabylon, useFirstMount } from '@/shared/hooks';

import '@babylonjs/loaders';

import coords, { Pages } from './coords';
import navigationStore from './store';

const Canvas = () => {
    const canvasCoords = navigationStore.use.canvasCoords();
    const pathname = usePathname();
    const isFirstMount = useFirstMount();
    const initCameraPosition = useRef(false);
    const { BabylonCanvas, scene, camera } = useBabylon();

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
            const speed = 0.08;
            const done: Record<string, boolean> = { x: false, y: false };

            const methods = { x: '', y: '' } as Record<string, string>;

            const observer = scene.onBeforeRenderObservable!.add((eventData) => {
                const camera = eventData.cameras[0];
                const cameraPosition = camera.position as any;
                const value = canvasCoords.value;

                if (value) {
                    Object.entries(value).forEach(([key, targetPosition]) => {
                        const currentPosition = cameraPosition[key];

                        if (!methods[key]) {
                            methods[key] = currentPosition > targetPosition ? 'dec' : 'inc';
                        }

                        if (methods[key] === 'dec') {
                            if (currentPosition > targetPosition) {
                                cameraPosition[key] -= speed;
                            } else {
                                done[key] = true;
                            }
                        } else {
                            if (currentPosition < targetPosition) {
                                cameraPosition[key] += speed;
                            } else {
                                done[key] = true;
                            }
                        }
                    });
                }

                if (done.x && done.y) {
                    scene?.onBeforeRenderObservable.remove(observer);
                }
            });
        }
    }, [pathname]);

    return <BabylonCanvas />;
};

export default Canvas;
