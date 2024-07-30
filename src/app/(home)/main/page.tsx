'use client';

import React, { useCallback } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { useRouter } from 'next/navigation';

import { paths } from '@/shared/constants';
import { authApi } from '@/shared/gql';
import { Button } from '@/shared/ui';

import MainView from './view';

const MainPage = () => {
    const logout = authApi.logout();
    const router = useRouter();
    const controls = useAnimationControls();

    const onRoute = useCallback(
        (href: string) => async () => {
            await router.prefetch(href);
            await controls.start('exit');
            await router.push(href);
            await controls.set('hidden');
            await controls.start('enter');
        },
        [router, controls]
    );

    const menuItems: Array<IMenuItem<{ path: string; page: keyof typeof paths.home }>> = [
        { id: 0, title: 'Сервер', payload: { path: paths.server.CREATE, page: 'SERVER' } },
        { id: 1, title: 'Настройки', payload: { path: paths.home.OPTIONS, page: 'OPTIONS' } },
        { id: 2, title: 'Выход', payload: { path: paths.home.LOGIN, page: 'LOGIN' }, onClick: logout },
    ];

    return (
        <motion.main
            animate={controls}
            variants={{
                hidden: { opacity: 0.3, x: -200, y: 0 },
                enter: { opacity: 1, x: 0, y: 0 },
                exit: { opacity: 0.3, x: 0, y: -100 },
            }}
            transition={{ type: 'keyframes', duration: 0.2 }}
        >
            <Button onClick={onRoute('/options')}>ewfwe</Button>
            <MainView key={'2323'} menuItems={menuItems} />;
        </motion.main>
    );
};

export default MainPage;
