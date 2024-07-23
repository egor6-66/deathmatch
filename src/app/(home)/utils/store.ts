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
}

interface IMethods {
    pageCoords: {
        setCoord: (value: IPageCoords) => void;
    };
}

const navigationStore = useZustand<IStore, IMethods>({
    keys: ['pageCoords', 'canvasCoords'],
    methods: {
        pageCoords: (getState) => ({
            setCoord: (value) => {
                const state = getState();
                state.pageCoords.set(value);
            },
        }),
    },
});

export type NavigationStoreTypes = StoreTypes<typeof navigationStore.use>;
export default navigationStore;
