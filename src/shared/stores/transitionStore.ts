import useZustand from 'react-use-zustand';
import { MotionProps } from 'framer-motion';

import { paths } from '@/shared/constants';

interface IStore {
    home: {
        page: paths.HomePagesTypes;
        animations: MotionProps;
    };
    server: {
        page: paths.ServerPagesTypes;
        animations: MotionProps;
    };
}

const transitionStore = useZustand<IStore>({
    keys: ['home', 'server'],
});

export default transitionStore;
