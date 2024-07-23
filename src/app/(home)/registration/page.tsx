'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { paths } from '@/shared/constants';

import { coords, navigationStore } from '../utils';

import RegistrationView from './view';

const RegistrationPage = () => {
    const { push } = useRouter();

    const canvasCoords = navigationStore.use.canvasCoords();
    const pageCoords = navigationStore.use.pageCoords();

    const goToLogin = () => {
        // canvasCoords.set(coords.login.canvas);
        push(paths.home.LOGIN);
    };

    useEffect(() => {
        canvasCoords.set(coords.registration.canvas);
        pageCoords.set({ initial: { x: -2000, y: 0 }, exit: { x: 2000, y: 0 } });
    }, []);

    return <RegistrationView goToLogin={goToLogin} />;
};

export default RegistrationPage;
