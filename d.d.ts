declare type UniqueId = number | string;

declare interface IMenuItem<T = any> {
    id: UniqueId;
    title: string;
    payload?: T;
    onClick?: () => void;
}

declare interface ICoords {
    x?: number;
    y?: number;
    z?: number;
}
