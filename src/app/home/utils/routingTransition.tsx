'use client';

import { ReactNode, useContext, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { usePathname } from 'next/navigation';

import { navigationStore } from './index';

const FrozenRouter = (props: { children: ReactNode }) => {
    const context = useContext(LayoutRouterContext ?? {});
    const frozen = useRef(context).current;

    if (!frozen) {
        return <>{props.children}</>;
    }

    return <LayoutRouterContext.Provider value={frozen}>{props.children}</LayoutRouterContext.Provider>;
};

const RoutingTransition = ({ children }: { children: ReactNode }) => {
    const pageCoords = navigationStore.use.pageCoords();
    const key = usePathname();

    return (
        <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
                key={key}
                initial={{ ...pageCoords.value?.initial }}
                animate={{ x: 0, y: 0 }}
                exit={{ ...pageCoords.value?.exit }}
                style={{ width: '100%', height: '100%' }}
                transition={{ duration: 0.35 }}
                suppressHydrationWarning
            >
                <FrozenRouter>{children}</FrozenRouter>
            </motion.div>
        </AnimatePresence>
    );
};

export default RoutingTransition;
