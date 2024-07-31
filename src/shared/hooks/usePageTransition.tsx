import React, { ReactNode, useCallback, useState } from 'react';
import { motion, MotionProps, useAnimationControls } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface IOnRouterProps extends MotionProps {
    href: string;
}

interface ITransitionProps extends MotionProps {
    children: ReactNode;
}

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

    const Transition = useCallback((props: ITransitionProps) => {
        const { children, style, ...rest } = props;

        return (
            <motion.main style={{ width: '100%', height: '100%', ...style }} animate={controls} {...rest} {...animations}>
                {children}
            </motion.main>
        );
    }, []);

    return { onRoute, Transition, router };
}

export default usePageTransition;
