import useZustand, { StoreTypes } from 'react-use-zustand';

interface ICoords {
    x: number;
    y: number;
}

interface IPageCoords {
    initial?: ICoords;
    animate?: ICoords;
    exit?: ICoords;
}

interface IStore {
    pageCoords: IPageCoords;
    canvasCoords: ICoords;
    wallIsReady: boolean;
}

const homeStore = useZustand<IStore>({
    keys: ['pageCoords', 'canvasCoords', 'wallIsReady'],
});

export type HomeStoreTypes = StoreTypes<typeof homeStore.use>;
export default homeStore;
