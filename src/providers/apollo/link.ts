import { HttpLink, split } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { createClient } from 'graphql-ws';

const httpLink = new HttpLink({
    uri: `http://localhost:5000/graphql`,
    credentials: 'include',
});

const wsLink = new GraphQLWsLink(
    createClient({
        url: `ws://localhost:5000/graphql`,
    })
);

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);

        return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    },
    wsLink,
    httpLink
);

export default splitLink;
