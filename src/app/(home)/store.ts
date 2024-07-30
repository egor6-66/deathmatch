import useZustand from 'react-use-zustand';
import { MotionProps } from 'framer-motion';

import { paths } from '@/shared/constants';

type Pages = keyof typeof paths.home;

interface IStore {
    page: Pages;
    animations: MotionProps;
}

const homePagesStore = useZustand<IStore>({
    keys: ['page', 'animations'],
});

export default homePagesStore;
