// type KeysOfType<T> = {
//     [K in keyof T]: T[K] extends string | number ? K : { name: K; fields: Array<KeysOfType<T[K]>> };
// }[keyof T];

type KeysOfType<T> = {
    [K in keyof T]: T[K] extends object ? never : K;
};

type IFilterTypes<T, B> = {
    [K in keyof B]: string;
};

export type { IFilterTypes, KeysOfType };
