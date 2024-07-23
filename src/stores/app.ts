import useZustand, { StoreTypes } from 'react-use-zustand';

interface IStore {
    theme: Theme;
}

interface IMethods {
    theme: {
        change: (theme: Theme) => void;
    };
}

const appStore = useZustand<IStore, IMethods>({
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
