'use client';

import { ReactNode } from 'react';

import { Canvas, RoutingTransition } from './utils';

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <RoutingTransition>{children}</RoutingTransition>
            <Canvas />
        </>
    );
};

export default Layout;
