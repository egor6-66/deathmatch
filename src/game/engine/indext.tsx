import React, { useRef } from 'react';

import Pbr from './customModels';

const BabylonCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const sceneRef = useRef<any>(null);

    return (
        <>
            <canvas style={{ width: '100%', height: '100%' }} ref={canvasRef}></canvas>
        </>
    );
};

export default BabylonCanvas;
