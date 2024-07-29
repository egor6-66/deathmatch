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
    homeAnimations: IPageAnimations;
    canvasCoords: ICoords;
    wallIsReady: boolean;
}

const homeStore = useZustand<IStore>({
    keys: ['homeAnimations', 'canvasCoords', 'wallIsReady'],
});

export type HomeStoreTypes = StoreTypes<typeof homeStore.use>;
export default homeStore;
