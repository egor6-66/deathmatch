import { IUser } from './user';

interface IGameServer {
    id: number;
    name: string;
    private: boolean;
    password: string;
    usersCount: number;
    owner: IUser;
    users: IUser[];
}

type WithOutFields<T extends keyof IGameServer> = Omit<IGameServer, T>;

export type { IGameServer, WithOutFields };
