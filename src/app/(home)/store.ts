import useZustand from 'react-use-zustand';
import { MotionProps } from 'framer-motion';

import { paths } from '@/shared/constants';

type Pages = keyof typeof paths.home;

interface IStore {
    location: {
        page: Pages;
        url: string;
    };

    animations: MotionProps;
}

const homePagesStore = useZustand<IStore>({
    keys: ['location', 'animations'],
});

export default homePagesStore;
