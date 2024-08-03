import { FetchResult, gql, useLazyQuery, useMutation, useQuery } from '@apollo/client';

import { client } from '@/providers/apollo';
import { GameServer } from '@/shared/interfaces';

const serverFields = `id, name, private, usersCount  `;
const ownerFields = `owner { id, nickname } `;
const usersFields = `users { id, nickname } `;

const createServer = () => {
    return useMutation<{ newServer: GameServer.WithOutFields<'users' | 'owner'> }, { password: string; name: string }>(
        gql`mutation newServer($password: String!, $name: String!) {newServer(data: { password: $password, name: $name }) {${serverFields}}}`
    );
};

const joinServer = () => {
    return useMutation<{ joinServer: boolean }, { id: number }>(
        gql`
            mutation joinServer($id: Int!) {
                joinServer(id: $id)
            }
        `
    );
};

const leaveServer = () => {
    return useMutation<{ leaveServer: boolean }, { id: number }>(
        gql`
            mutation leaveServer($id: Int!) {
                leaveServer(id: $id)
            }
        `
    );
};

const getViewerServers = () => {
    return useQuery<{ viewerServers: GameServer.WithOutFields<'users'>[] }>(gql`query viewerServers {viewerServers { ${serverFields}} }`);
};

const allServers = () => {
    const fields = serverFields + ownerFields;
    const queryTemplate = gql`query allServers {allServers {${fields}}}`;

    const query = () => useQuery<{ allServers: GameServer.WithOutFields<'users'>[] }>(queryTemplate);

    const subscribe = (cb?: (value?: GameServer.WithOutFields<'users'>) => void) => {
        client.subscribe({ query: gql`subscription newServer {newServer {${fields}}}` }).subscribe({
            next(value: FetchResult<{ newServer: GameServer.WithOutFields<'users'> }>) {
                const data = client.readQuery({ query: queryTemplate });
                data && client.writeQuery({ query: queryTemplate, data: { allServers: [...data.allServers, value.data?.newServer] } });
                cb && cb(value.data?.newServer);
            },
        });
    };

    return { query, subscribe };
};

const server = () => {
    const fields = serverFields + ownerFields + usersFields;
    const queryTemplate = gql`query server($id: Int!) {server(id: $id) {${fields}}}`;

    const lazyQuery = useLazyQuery<{ server: GameServer.IGameServer }, { id: number }>(queryTemplate);
    const query = (id: number) => useQuery<{ server: GameServer.IGameServer }>(queryTemplate, { variables: { id } });

    const subscribe = () => {
        client.subscribe({ query: gql`subscription updateServer {updateServer {${fields}}}` }).subscribe({});
    };

    return { lazyQuery, subscribe, query };
};

export { allServers, createServer, getViewerServers, joinServer, leaveServer, server };
