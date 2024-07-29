import { gql, useLazyQuery, useMutation, useQuery } from '@apollo/client';

import { GameServer } from '@/shared/interfaces';

const serverFields = ['id', 'name', 'private', 'url'];

const createServer = () => {
    const [mutation] = useMutation<{ newServer: GameServer.IGameServer }>(
        gql`
            mutation newServer($password: String!, $name: String!) {
                newServer(data: { password: $password, name: $name }) {
                    ${serverFields}
                }
            }
        `
    );

    return async (variables: { password: string; name: string }) => {
        return await mutation({ variables });
    };
};

const getViewerServers = () => {
    return useQuery<{ servers: GameServer.IGameServer[] }>(
        gql`
            query servers {
                servers {
                    ${serverFields}
                }
            }
        `
    );
};

const getAllServers = () => {
    return useQuery<{ allServers: GameServer.IGameServer[] }>(
        gql`
            query allServers {
                allServers {
                    ${serverFields}
                }
            }
        `
    );
};

const getServer = () => {
    return useLazyQuery<{ server: GameServer.IGameServer }>(
        gql`
            query server($id: Int!) {
                server(id: $id) {
                    ${serverFields}
                }
            }
        `
    )[0];
};

export { createServer, getAllServers, getServer, getViewerServers };
