'use client';

import useZustand from 'react-use-zustand';
import { MotionProps } from 'framer-motion';

import { paths } from '@/shared/constants';

interface IStore {
    wall: {
        page: paths.HomePagesTypes | paths.AuthPagesTypes;
        animations: MotionProps;
    };
    server: {
        page: paths.ServerPagesTypes;
        animations: MotionProps;
    };
}

const transitionStore = useZustand<IStore>({
    keys: ['wall', 'server'],
    default: {
        wall: {
            page: typeof window !== 'undefined' ? (window.location.pathname.split('/')[2].toUpperCase() as any) : 'MAIN',
            animations: {},
        },
    },
    forStorage: {
        storageName: 'routing',
        all: true,
    },
});

export default transitionStore;
