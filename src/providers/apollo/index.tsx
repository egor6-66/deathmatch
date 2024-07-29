'use client';

import { ReactNode } from 'react';
import * as Apollo from '@apollo/client';
import { ApolloLink } from '@apollo/client';

import cache from './cache';
import errorLink from './errorLink';
import httpLink from './httpLink';

export const client = new Apollo.ApolloClient({
    cache: cache,
    link: ApolloLink.from([errorLink, httpLink]),
});

const ApolloProvider = ({ children }: { children: ReactNode }) => {
    return <Apollo.ApolloProvider client={client}>{children}</Apollo.ApolloProvider>;
};

export default ApolloProvider;
