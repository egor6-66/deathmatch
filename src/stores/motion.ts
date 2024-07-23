import useZustand, { StoreTypes } from 'react-use-zustand';
import { MotionProps } from 'framer-motion';

interface IStore {
    homePagesMotion: MotionProps;
}

interface IMethods {
    homePagesMotion: {
        setCoord: (value: MotionProps) => void;
    };
}

const motionStore = useZustand<IStore, IMethods>({
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
});

export type MotionStoreTypes = StoreTypes<typeof motionStore.use>;
export default motionStore;
