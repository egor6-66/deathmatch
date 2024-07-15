'use client';

import { ReactNode, useContext, useRef } from 'react';
import { AnimatePresence, motion, MotionProps } from 'framer-motion';
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { usePathname } from 'next/navigation';

function FrozenRouter(props: { children: ReactNode }) {
    const context = useContext(LayoutRouterContext ?? {});
    const frozen = useRef(context).current;

    if (!frozen) {
        return <>{props.children}</>;
    }

    return <LayoutRouterContext.Provider value={frozen}>{props.children}</LayoutRouterContext.Provider>;
}

interface Props {
    children: ReactNode;
    motionVariant: MotionProps;
}

function RoutingTransitionEffect(props: Props) {
    const { children, motionVariant } = props;

    const key = usePathname();

    return (
        <AnimatePresence mode="popLayout" initial={false}>
            <motion.div key={key} {...motionVariant} style={{ width: '100%', height: '100%' }} transition={{ duration: 0.7 }} suppressHydrationWarning>
                <FrozenRouter>{children}</FrozenRouter>
            </motion.div>
        </AnimatePresence>
    );
}

export default RoutingTransitionEffect;
