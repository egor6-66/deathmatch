export const home = {
    MAIN: '/home/main',
    AUTH: '/home/auth',
};

export const main = {
    MENU: `${home.MAIN}/menu`,
    SERVER: `${home.MAIN}/server`,
    OPTIONS: `${home.MAIN}/options`,
};

export const auth = {
    LOGIN: `${home.AUTH}/login`,
    REGISTRATION: `${home.AUTH}/registration`,
};

export const customization = {
    BASIC: `${main.OPTIONS}/basic`,
    CONTROL: `${main.OPTIONS}/control`,
    CHARACTER: `${main.OPTIONS}/character`,
    WEAPON: `${main.OPTIONS}/weapon`,
};

export const server = {
    CREATE: `${main.SERVER}/create`,
    FIND: `${main.SERVER}/find`,
};

export const game = {
    BATTLEFIELD: `/battlefield`,
};
