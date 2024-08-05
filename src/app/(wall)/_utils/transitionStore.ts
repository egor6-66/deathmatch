'use client';

import useZustand from 'react-use-zustand';
import { MotionProps } from 'framer-motion';

import { paths } from '@/shared/constants';

interface IStore {
    wall: {
        page: paths.HomePagesTypes | paths.AuthPagesTypes;
        animations: MotionProps;
    };
}

const transitionStore = useZustand<IStore>({
    keys: ['wall'],
});

export default transitionStore;
