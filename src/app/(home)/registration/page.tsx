'use client';

import { useEffect } from 'react';

import { Input } from '@/shared/ui';

import { coords, navigationStore } from '../utils';

import RegistrationView from './view';

const RegistrationPage = () => {
    const canvasCoords = navigationStore.use.canvasCoords();
    const pageCoords = navigationStore.use.pageCoords();

    const nickname = Input.use({ cut: /\s/ });
    const password = Input.use({ cut: /\s/ });

    useEffect(() => {
        canvasCoords.set(coords.registration.canvas);
        pageCoords.set({ initial: { x: -2000, y: 0 }, exit: { x: 2000, y: 0 } });
    }, []);

    return <RegistrationView inputs={{ nickname, password }} />;
};

export default RegistrationPage;
