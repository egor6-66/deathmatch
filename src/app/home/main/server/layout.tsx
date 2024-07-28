'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

import { RoutingTransition } from '../../utils';

const ServerLayout = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname();

    return (
        <RoutingTransition animationTrigger={pathname.split('/')[4]} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {children}
        </RoutingTransition>
    );
};

export default ServerLayout;
