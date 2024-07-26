import React, { CSSProperties, useEffect, useRef } from 'react';
import { Camera, Color4, CubeTexture, Engine, HemisphericLight, Scene, SceneLoader, UniversalCamera, Vector3 } from '@babylonjs/core';
import { usePathname } from 'next/navigation';

import { useFirstMount } from '@/shared/hooks';

import '@babylonjs/loaders';

import coords, { Pages } from './coords';
import navigationStore from './store';

const Canvas = () => {
    const canvasCoords = navigationStore.use.canvasCoords();
    const pathname = usePathname();
    const isFirstMount = useFirstMount();
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const engineRef = useRef<Engine | null>(null);
    const sceneRef = useRef<Scene | null>(null);
    const cameraRef = useRef<Camera | null>(null);

    useEffect(() => {
        const { current } = canvasRef;

        if (current && !engineRef.current) {
            const engine = new Engine(current);
            const scene = new Scene(engine);
            const camera = new UniversalCamera('camera', new Vector3(0, 0, -3), scene);
            scene.clearColor = new Color4(0, 0, 0, 0);
            camera.speed = 0.2;
            camera.minZ = 0.05;
            engineRef.current = engine;
            sceneRef.current = scene;
            cameraRef.current = camera;
            camera.attachControl();

            SceneLoader.ImportMeshAsync('', '/wall/', 'wall.glb').then(() => '');
            const envTex = CubeTexture.CreateFromPrefilteredData('/environment/environment.env', scene);
            scene.environmentTexture = envTex;

            scene.createDefaultSkybox(envTex, true);
            new HemisphericLight('hemi', new Vector3(0, 4, 0), scene);
            engine.runRenderLoop(() => {
                scene.render();
            });
        }
    }, []);

    useEffect(() => {
        const resize = () => {
            engineRef.current?.resize();
        };

        engineRef.current && window.addEventListener('resize', resize);

        return () => {
            window.removeEventListener('resize', resize);
        };
    }, [engineRef.current]);

    useEffect(() => {
        const scene = sceneRef.current as Scene;

        const speed = 0.08;
        const done: Record<string, boolean> = { x: false, y: false };
        const camera = scene.cameras[0];

        if (isFirstMount) {
            const page = pathname.split('/').pop()?.toUpperCase() as Pages;

            if (page in coords) {
                camera.position.x = coords[page].x;
                camera.position.y = coords[page].y;
            }

            return;
        }

        const methods = { x: '', y: '' } as Record<string, string>;

        const observer = scene.onBeforeRenderObservable.add((eventData) => {
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
                scene.onBeforeRenderObservable.remove(observer);
            }
        });
    }, [pathname]);

    const canvasStyles: CSSProperties = {
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
    };

    return <canvas style={canvasStyles} ref={canvasRef}></canvas>;
};

export default Canvas;