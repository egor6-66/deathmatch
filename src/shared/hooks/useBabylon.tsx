import React, { CSSProperties, JSX, ReactElement, useEffect, useRef, useState } from 'react';
import { Camera, Color4, Engine, HemisphericLight, Scene, UniversalCamera, Vector3 } from '@babylonjs/core';

import '@babylonjs/loaders';

interface ICoords {
    x?: number;
    y?: number;
    z?: number;
}

interface IProps {
    cameraOptions?: {
        type?: 'universalCamera';
        vector?: ICoords;
        minZ?: number;
        speed?: number;
    };
    canvas?: {
        styles?: CSSProperties;
    };
}

export const cameraOptionsDefault = {
    type: 'universalCamera',
    vector: { x: 0, y: 0, z: -4.1 },
    minZ: 0.05,
    speed: 0.2,
};

export const canvasDefault = {
    styles: {
        width: '100%',
        height: '100%',
        position: 'fixed',
        objectFit: 'cover',
        top: 0,
        left: 0,
        zIndex: -1,
    },
} as Required<IProps>['canvas'];

const useBabylon = (props?: IProps) => {
    const { cameraOptions, canvas } = props || {};

    const [camera, setCamera] = useState<Camera | null>(null);

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const engineRef = useRef<Engine | null>(null);
    const sceneRef = useRef<Scene | null>(null);

    const canvasJSXRef = useRef<() => ReactElement | null>(function () {
        return <canvas style={canvas?.styles || canvasDefault.styles} ref={canvasRef}></canvas>;
    });

    useEffect(() => {
        if (canvasRef.current && !engineRef.current) {
            const engine = new Engine(canvasRef.current);
            const scene = new Scene(engine);
            engineRef.current = engine;
            sceneRef.current = scene;

            const vector = cameraOptions?.vector || cameraOptionsDefault.vector;
            const cameraType = cameraOptions?.type || cameraOptionsDefault.type;

            if (cameraType === 'universalCamera') {
                const camera = new UniversalCamera('camera', new Vector3(vector.x, vector.y, vector.z), scene);
                camera.speed = cameraOptions?.speed || cameraOptionsDefault.speed;
                camera.minZ = cameraOptions?.minZ || cameraOptionsDefault.minZ;
                scene.clearColor = new Color4(0, 0, 0, 0);
                camera.attachControl();
                setCamera(camera);
            }

            new HemisphericLight('hemi', new Vector3(0, 4, 0), scene);
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

export default useBabylon;
