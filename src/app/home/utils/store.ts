import useZustand, { StoreTypes } from 'react-use-zustand';

interface ICoords {
    x: number;
    y: number;
}

interface IPageCoords {
    initial: ICoords;
    exit: ICoords;
}

interface IStore {
    pageCoords: IPageCoords;
    canvasCoords: ICoords;
    wallIsReady: boolean;
}

interface IMethods {
    pageCoords: {
        setCoord: (value: IPageCoords) => void;
    };
}

const homeStore = useZustand<IStore, IMethods>({
    keys: ['pageCoords', 'canvasCoords', 'wallIsReady'],
    methods: {
        pageCoords: (getState) => ({
            setCoord: (value) => {
                const state = getState();
                state.pageCoords.set(value);
            },
        }),
    },
});

export type HomeStoreTypes = StoreTypes<typeof homeStore.use>;
export default homeStore;
