'use client';

import { ReactNode, useEffect } from 'react';

import gqlSub from './gql';

const SubscriptionsProvider = ({ children }: { children: ReactNode }) => {
    useEffect(() => {
        gqlSub();
    }, []);

    return children;
};

export default SubscriptionsProvider;
