import React, { useEffect, useRef } from 'react';

import { IOptions } from './engine/interfeces';
import Engine from './engine';

const BabylonCanvas = (props: IOptions) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const engineIsMounted = useRef(false);

    useEffect(() => {
        const { current } = canvasRef;

        if (current && !engineIsMounted.current) {
            new Engine(current, props);
            engineIsMounted.current = true;
        }
    }, []);

    return <canvas style={{ width: '100%', height: '100%' }} ref={canvasRef}></canvas>;
};

export default BabylonCanvas;
