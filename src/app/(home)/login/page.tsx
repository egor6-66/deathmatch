'use client';

import { useEffect } from 'react';

import LoginView from '@/app/(home)/login/view';
import { Input } from '@/shared/ui';

import { coords, navigationStore } from '../utils';

const LoginPage = () => {
    const canvasCoords = navigationStore.use.canvasCoords();
    const pageCoords = navigationStore.use.pageCoords();

    const nickname = Input.use({ cut: /\s/ });
    const password = Input.use({ cut: /\s/ });

    useEffect(() => {
        canvasCoords.set(coords.login.canvas);
        pageCoords.set({ initial: { x: 2000, y: 0 }, exit: { x: -2000, y: 0 } });
    }, []);

    return <LoginView inputs={{ nickname, password }} />;
};

export default LoginPage;
