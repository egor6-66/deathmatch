import useZustand, { StoreTypes } from 'react-use-zustand';

interface ICoords {
    x: number;
    y: number;
}

interface IPageAnimations {
    initial?: ICoords;
    animate?: ICoords;
    exit?: ICoords;
}

interface IStore {
    homePageCoords: IPageAnimations;
    canvasCoords: ICoords;
    wallIsReady: boolean;
}

const homeStore = useZustand<IStore>({
    keys: ['homePageCoords', 'canvasCoords', 'wallIsReady'],
});

export type HomeStoreTypes = StoreTypes<typeof homeStore.use>;
export default homeStore;
