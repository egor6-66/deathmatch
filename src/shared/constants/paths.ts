export const home = {
    MAIN: `/main`,
    SERVER: `/server`,
    OPTIONS: `/options`,
    LOGIN: `/login`,
    REGISTRATION: `/registration`,
};

export const options = {
    BASIC: `${home.OPTIONS}/basic`,
    CONTROL: `${home.OPTIONS}/control`,
    CHARACTER: `${home.OPTIONS}/character`,
    WEAPON: `${home.OPTIONS}/weapon`,
};

export const server = {
    CREATE: `${home.SERVER}/create`,
    FIND: `${home.SERVER}/find`,
};

export const game = {
    BATTLEFIELD: `/battlefield`,
};

export const PrivatePaths = [home.OPTIONS, home.SERVER, home.MAIN, ...Object.keys(options), ...Object.keys(server)];
export const AuthPaths = [home.LOGIN, home.REGISTRATION];
