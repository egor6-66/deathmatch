declare type UniqueId = number | string;

interface IMenuItem<T = any> {
    id: UniqueId;
    title: string;
    payload: T;
}
