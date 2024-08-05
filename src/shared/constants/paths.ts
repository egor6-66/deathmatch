export const wall = {
    AUTH: '/auth',
    HOME: '/home',
};

export const server = {
    CREATE_SERVER: `${wall.HOME}/create_server`,
    FIND_SERVERS: `${wall.HOME}/find_servers`,
    MY_SERVERS: `${wall.HOME}/my_servers`,
};

export const home = {
    MAIN: `${wall.HOME}/main`,
    SETTINGS: `${wall.HOME}/settings`,
    ...server,
};

export const auth = {
    LOGIN: `${wall.AUTH}/login`,
    REGISTRATION: `${wall.AUTH}/registration`,
};

export const game = {
    BATTLEFIELD: `/battlefield`,
};

const getValues = (obj: object) => Object.values(obj);

export const privatePaths = [...getValues(home), ...getValues(game)];
export const publicPaths = [...getValues(auth)];

type WallPagesTypes = keyof typeof wall;
type HomePagesTypes = keyof typeof home;
type AuthPagesTypes = keyof typeof auth;
type ServerPagesTypes = keyof typeof server;

export type { AuthPagesTypes, HomePagesTypes, ServerPagesTypes, WallPagesTypes };
