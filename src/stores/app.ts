import useZustand, { StoreTypes } from 'react-use-zustand';
import { MotionProps } from 'framer-motion';

type Store = {
    theme: Theme;
};

type Methods = {
    theme: {
        change: (theme: Theme) => void;
    };
};

const appStore = useZustand<Store, Methods>({
    keys: ['theme'],
    default: {
        theme: 'dark',
    },
    methods: {
        theme: (getState) => ({
            change: (value) => {
                const state = getState();
                document.documentElement.dataset.theme = value;
                state.theme.set(value);
            },
        }),
    },
    forStorage: {
        all: true,
        storageName: 'app',
    },
});

export type AppStoreTypes = StoreTypes<typeof appStore.use>;
export default appStore;
