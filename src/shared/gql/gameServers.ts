import { gql, useLazyQuery, useMutation, useQuery } from '@apollo/client';

import { useApollo } from '@/shared/hooks';
import { GameServer } from '@/shared/interfaces';

const serverFields = `id, name, private, url, usersCount  `;
const ownerFields = `owner { id, nickname } `;

const { queryWithSub } = useApollo;

const createServer = () => {
    const [mutation] = useMutation<{ newServer: GameServer.IGameServer }>(
        gql`mutation newServer($password: String!, $name: String!) {newServer(data: { password: $password, name: $name }) {${serverFields + ownerFields}}}`
    );

    return async (variables: { password: string; name: string }) => {
        return await mutation({ variables });
    };
};

const joinServer = () => {
    const [mutation] = useMutation<{ newServer: GameServer.IGameServer }>(
        gql`
            mutation joinServer($id: Int!) {
                joinServer(id: $id)
            }
        `
    );

    return async (variables: { id: number }) => {
        return await mutation({ variables });
    };
};

const getViewerServers = () => {
    return useQuery<{ viewerServers: GameServer.IGameServer[] }>(
        gql`
            query viewerServers {
                viewerServers {
                    ${serverFields}
                }
            }
        `
    );
};

const allServers = () => {
    return queryWithSub<{ allServers: GameServer.IGameServer[] }, GameServer.IGameServer>({
        queryName: 'allServers',
        subName: 'newServer',
        fields: serverFields + ownerFields,
    });
};

const getServer = () => {
    return useLazyQuery<{ server: GameServer.IGameServer }>(gql`query server($id: Int!) {server(id: $id) {${serverFields + ownerFields}}}`)[0];
};

export { allServers, createServer, getServer, getViewerServers, joinServer };
