import { CSSProperties } from 'react';

export interface IProps {
    cameraOptions: {
        type: 'universalCamera';
        vector: ICoords;
        minZ: number;
        speed: number;
    };
    canvas: {
        styles?: CSSProperties;
    };
}
