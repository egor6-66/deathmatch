'use client';

import { ReactNode, useEffect } from 'react';

import { gameServersApi } from '@/shared/gql';

const HomeSubProvider = ({ children }: { children: ReactNode }) => {
    useEffect(() => {
        gameServersApi.allServers().subscribe();
    }, []);

    return children;
};

export default HomeSubProvider;
