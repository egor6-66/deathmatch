import { IProps } from '@/shared/babylon/interfaces';

const defaultValues: IProps = {
    cameraOptions: {
        type: 'universalCamera',
        vector: { x: 0, y: 0, z: -7.1 },
        minZ: 0.05,
        speed: 0.2,
    },
    canvas: {
        styles: {
            width: '100%',
            height: '100%',
            position: 'fixed',
            objectFit: 'contain',
            top: 0,
            left: 0,
            zIndex: -1,
        },
    },
};

export default defaultValues;
