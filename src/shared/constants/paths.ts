export const mainWall = {
    AUTH: '/auth',
    HOME: '/home',
};

export const home = {
    MAIN: `${mainWall.HOME}/main`,
    SERVER: `${mainWall.HOME}/server`,
    SETTINGS: `${mainWall.HOME}/settings`,
};

export const auth = {
    LOGIN: `${mainWall.AUTH}/login`,
    REGISTRATION: `${mainWall.AUTH}/registration`,
};

export const server = {
    CREATE: `${home.SERVER}/create`,
    FIND: `${home.SERVER}/find`,
    MY: `${home.SERVER}/my`,
};

export const game = {
    BATTLEFIELD: `/battlefield`,
};

const getValues = (obj: object) => Object.values(obj);

export const privatePaths = [...getValues(home), ...getValues(server), ...getValues(game)];
export const publicPaths = [...getValues(auth)];

type MainWallPagesTypes = keyof typeof mainWall;
type HomePagesTypes = keyof typeof home;
type AuthPagesTypes = keyof typeof auth;
type ServerPagesTypes = keyof typeof server;

export type { AuthPagesTypes, HomePagesTypes, MainWallPagesTypes, ServerPagesTypes };
