import { CSSProperties } from 'react';

export interface IProps {
    cameraOptions: {
        type: 'universalCamera';
        vector: IVector3;
        minZ: number;
        speed: number;
    };
    canvas: {
        styles?: CSSProperties;
    };
}
