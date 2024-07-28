import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { Camera, Color4, DirectionalLight, Engine, HemisphericLight, PointLight, Scene, SpotLight, UniversalCamera, Vector3 } from '@babylonjs/core';

import '@babylonjs/loaders';

import defaultValues from './default';
import { IProps } from './interfaces';
import { createGizmos, smoothMovement } from './utils';

const babylon = (props?: Partial<IProps>) => {
    const { cameraOptions, canvas } = props || {};

    const [camera, setCamera] = useState<Camera | null>(null);

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const engineRef = useRef<Engine | null>(null);
    const sceneRef = useRef<Scene | null>(null);

    const canvasJSXRef = useRef<() => ReactElement | null>(function () {
        return <canvas style={canvas?.styles || defaultValues.canvas.styles} ref={canvasRef}></canvas>;
    });

    useEffect(() => {
        if (canvasRef.current && !engineRef.current) {
            const engine = new Engine(canvasRef.current);
            const scene = new Scene(engine);
            engineRef.current = engine;
            sceneRef.current = scene;

            const vector = cameraOptions?.vector || defaultValues.cameraOptions.vector;
            const cameraType = cameraOptions?.type || defaultValues.cameraOptions.type;

            if (cameraType === 'universalCamera') {
                const camera = new UniversalCamera('camera', new Vector3(vector.x, vector.y, vector.z), scene);
                camera.speed = cameraOptions?.speed || defaultValues.cameraOptions.speed;
                camera.minZ = cameraOptions?.minZ || defaultValues.cameraOptions.minZ;
                scene.clearColor = new Color4(0, 0, 0, 0);
                camera.attachControl();
                setCamera(camera);
            }

            // new HemisphericLight('hemi', new Vector3(0, 4, 0), scene);
            engine.runRenderLoop(() => {
                scene.render();
            });
        }
    }, []);

    return {
        BabylonCanvas: canvasJSXRef.current,
        engine: engineRef.current,
        scene: sceneRef.current,
        camera,
    };
};

export { createGizmos, smoothMovement };
export default babylon;
