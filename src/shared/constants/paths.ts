import { paths } from '@/shared/constants/index';

export const home = {
    MAIN: `/main`,
    SERVER: `/server`,
    SETTINGS: `/settings`,
    LOGIN: `/login`,
    REGISTRATION: `/registration`,
};

export const options = {
    BASIC: `${home.SETTINGS}/basic`,
    CONTROL: `${home.SETTINGS}/control`,
    CHARACTER: `${home.SETTINGS}/character`,
    WEAPON: `${home.SETTINGS}/weapon`,
};

export const server = {
    CREATE: `${home.SERVER}/create`,
    FIND: `${home.SERVER}/find`,
    MY: `${home.SERVER}/my`,
};

export const game = {
    BATTLEFIELD: `/battlefield`,
};

type HomePagesTypes = keyof typeof paths.home;
type ServerPagesTypes = keyof typeof paths.server;

export type { HomePagesTypes, ServerPagesTypes };

export const PrivateKeys = ['MAIN', 'SERVER', 'SETTINGS'];
export const PrivatePaths = [home.SETTINGS, home.SERVER, home.MAIN, ...Object.values(options), ...Object.values(server)];
export const AuthPaths = [home.LOGIN, home.REGISTRATION];
