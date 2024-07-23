import React, { CSSProperties, useEffect, useRef } from 'react';
import { Camera, Color4, CubeTexture, Engine, HemisphericLight, Scene, SceneLoader, UniversalCamera, Vector3 } from '@babylonjs/core';

import { useUpdateEffect } from '@/hooks';

import '@babylonjs/loaders';

import navigationStore from './store';

const Canvas = () => {
    const canvasCoords = navigationStore.use.canvasCoords();

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

    useUpdateEffect(() => {
        const scene = sceneRef.current as Scene;

        const speed = 0.08;

        const done: Record<string, boolean> = { x: false, y: false };

        const observer = scene.onBeforeRenderObservable.add((eventData) => {
            const camera = eventData.cameras[0];
            const cameraPosition = camera.position as any;

            if (canvasCoords.value) {
                Object.entries(canvasCoords.value).forEach(([key, val]) => {
                    if (val > 0) {
                        if (cameraPosition[key] > val) {
                            done[key] = true;
                        } else {
                            cameraPosition[key] += speed;
                        }
                    } else if (cameraPosition[key] < val) {
                        done[key] = true;
                    } else {
                        cameraPosition[key] -= speed;
                    }
                });
            }

            if (done.x && done.y) {
                scene.onBeforeRenderObservable.remove(observer);
            }
        });
    }, [canvasCoords.value?.x, canvasCoords.value?.y]);

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
