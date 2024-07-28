'use client';

import { ReactNode, useContext, useRef } from 'react';
import { AnimatePresence, motion, MotionProps } from 'framer-motion';
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';

const FrozenRouter = (props: { children: ReactNode }) => {
    const context = useContext(LayoutRouterContext ?? {});
    const frozen = useRef(context).current;

    if (!frozen) {
        return <>{props.children}</>;
    }

    return <LayoutRouterContext.Provider value={frozen}>{props.children}</LayoutRouterContext.Provider>;
};

interface IProps extends MotionProps {
    children: ReactNode;
    animationTrigger: string | number;
}

const RoutingTransition = (props: IProps) => {
    const { children, animationTrigger, ...rest } = props;

    return (
        <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
                key={animationTrigger}
                style={{ width: '100%', height: '100%' }}
                transition={rest?.transition ? rest?.transition : { duration: 0.35 }}
                {...rest}
                suppressHydrationWarning
            >
                {children}
                {/*<FrozenRouter>{children}</FrozenRouter>*/}
            </motion.div>
        </AnimatePresence>
    );
};

export default RoutingTransition;
