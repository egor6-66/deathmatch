declare interface IMenuItem<T = any> {
    id: UniqueId;
    title: string;
    payload?: T;
    onClick?: () => void;
}

declare interface IVector3 {
    x?: number;
    y?: number;
    z?: number;
}
