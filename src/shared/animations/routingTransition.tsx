'use client';

import { ReactNode, useContext, useRef } from 'react';
import { AnimatePresence, motion, MotionProps } from 'framer-motion';
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';

interface IProps extends MotionProps {
    children: ReactNode;
    animationTrigger: string;
    mode?: 'wait' | 'popLayout';
}

const FrozenRouter = (props: { children: React.ReactNode }) => {
    const context = useContext(LayoutRouterContext ?? {});
    const frozen = useRef(context).current;

    return <LayoutRouterContext.Provider value={frozen}>{props.children}</LayoutRouterContext.Provider>;
};

const RoutingTransition = (props: IProps) => {
    const { children, animationTrigger, mode, ...rest } = props;

    return (
        <AnimatePresence mode={mode || 'popLayout'} initial={false}>
            <motion.div
                key={animationTrigger}
                style={{ width: '100%', height: '100%' }}
                transition={rest?.transition || { duration: 0.35 }}
                {...rest}
                suppressHydrationWarning
            >
                <FrozenRouter>{children}</FrozenRouter>
                {/*{children}*/}
            </motion.div>
        </AnimatePresence>
    );
};

export default RoutingTransition;
