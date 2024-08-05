'use client';

import React, { CSSProperties, FC, useCallback, useState } from 'react';
import { motion, MotionProps, useAnimationControls } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface IOnRouterProps extends MotionProps {
    href: string;
}

const defaultStyles: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 12,
};

function usePageTransition() {
    const router = useRouter();
    const controls = useAnimationControls();
    const [animations, setAnimations] = useState<MotionProps>({});

    const onRoute = useCallback(
        async (props: IOnRouterProps) => {
            const { href, ...rest } = props;

            setAnimations(rest);
            await router.prefetch(href);
            await controls.start('exit');
            await router.push(href);
            await controls.set('initial');
            await controls.start('animate');
        },
        [router, controls]
    );

    const Transition: FC<MotionProps> = useCallback((props) => {
        const { children, style, ...rest } = props;

        return (
            <motion.main style={{ ...defaultStyles, ...style }} animate={controls} {...rest} {...animations}>
                {children}
            </motion.main>
        );
    }, []);

    return { onRoute, Transition, router };
}

export default usePageTransition;
