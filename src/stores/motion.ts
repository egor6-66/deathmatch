import useZustand, { StoreTypes } from 'react-use-zustand';
import { MotionProps } from 'framer-motion';

type Store = {
    homePagesMotion: MotionProps;
};

type Methods = {
    homePagesMotion: {
        setCoord: (value: MotionProps) => void;
    };
};

const motionStore = useZustand<Store, Methods>({
    keys: ['homePagesMotion'],
    default: {
        homePagesMotion: {
            animate: { x: 0, y: 0 },
        },
    },
    methods: {
        homePagesMotion: (getState) => ({
            setCoord: (value) => {
                const state = getState();
                state.homePagesMotion.set({ ...value, animate: { x: 0, y: 0 } });
            },
        }),
    },
    forStorage: {
        all: true,
        storageName: 'test',
    },
});

export type MotionStoreTypes = StoreTypes<typeof motionStore.use>;
export default motionStore;
