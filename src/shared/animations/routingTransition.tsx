'use client';

import { ReactNode } from 'react';
import { AnimatePresence, motion, MotionProps } from 'framer-motion';

interface IProps extends MotionProps {
    children: ReactNode;
    animationTrigger: string | number;
    mode?: 'wait' | 'popLayout';
}

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
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default RoutingTransition;
