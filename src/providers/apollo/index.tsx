'use client';

import { ReactNode } from 'react';
import * as Apollo from '@apollo/client';
import { ApolloLink } from '@apollo/client';

import cache from './cache';
import errorLink from './errorLink';
import link from './link';

export const client = new Apollo.ApolloClient({
    cache: cache,
    link: ApolloLink.from([errorLink, link]),
});

const ApolloProvider = ({ children }: { children: ReactNode }) => {
    return <Apollo.ApolloProvider client={client}>{children}</Apollo.ApolloProvider>;
};

export default ApolloProvider;
