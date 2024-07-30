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

export const PrivatePaths = [home.SETTINGS, home.SERVER, home.MAIN, ...Object.keys(options), ...Object.keys(server)];
export const AuthPaths = [home.LOGIN, home.REGISTRATION];
