'use client';

import React, { PropsWithChildren } from 'react';
import * as ReactQuery from '@tanstack/react-query';

function QueryClientProvider({ children }: PropsWithChildren) {
    const queryClient = new ReactQuery.QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
            },
        },
    });

    return <ReactQuery.QueryClientProvider client={queryClient}>{children}</ReactQuery.QueryClientProvider>;
}

export default QueryClientProvider;
