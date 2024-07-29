import { gql, useMutation, useQuery } from '@apollo/client';

import { GameServer } from '@/shared/interfaces';

const createServer = () => {
    const [mutation] = useMutation<{ server: GameServer.IGameServer }>(
        gql`
            mutation createServer($password: String!, $name: String!) {
                createServer(data: { password: $password, name: $name }) {
                    name
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
                    id
                    name
                    private
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
                    id
                    name
                    private
                }
            }
        `
    );
};

export { createServer, getAllServers, getViewerServers };
