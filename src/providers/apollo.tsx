'use client';

import { ReactNode } from 'react';
import * as Apollo from '@apollo/client';
import { ApolloLink, createHttpLink, gql } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const httpLink = createHttpLink({
    uri: `http://localhost:5000/graphql`,
    credentials: 'include',
});

const client = new Apollo.ApolloClient({
    cache: new Apollo.InMemoryCache(),
    link: ApolloLink.from([errorLink(), httpLink]),
});

function errorLink() {
    return onError(({ graphQLErrors, operation, forward }) => {
        if (graphQLErrors?.length) {
            graphQLErrors.forEach(({ message, path }) => {
                if (message === 'Unauthorized' && !path?.includes('login')) {
                    (async () => {
                        try {
                            await client.query({
                                query: gql`
                                    query refreshToken {
                                        refreshToken
                                    }
                                `,
                            });

                            forward(operation);
                        } catch (err) {
                            alert(err);
                        }
                    })();
                }
            });
        }
    });
}

const ApolloProvider = ({ children }: { children: ReactNode }) => {
    return <Apollo.ApolloProvider client={client}>{children}</Apollo.ApolloProvider>;
};

export default ApolloProvider;
