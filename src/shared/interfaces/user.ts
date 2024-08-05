interface IClientApp {
    theme: string;
    lang: 'eng' | 'ru';
}

interface IUser {
    id: number;
    nickname: string;
    clientApp: IClientApp;
}

export type { IUser };
