'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import LoginView from '@/app/(home)/login/view';
import { paths } from '@/shared/constants';

import { coords, navigationStore } from '../utils';

const LoginPage = () => {
    const { push } = useRouter();

    const canvasCoords = navigationStore.use.canvasCoords();
    const pageCoords = navigationStore.use.pageCoords();

    const goToRegistration = () => {
        // canvasCoords.set(coords.registration.canvas);
        push(paths.home.REGISTRATION);
    };

    useEffect(() => {
        canvasCoords.set(coords.login.canvas);
        pageCoords.set({ initial: { x: 2000, y: 0 }, exit: { x: -2000, y: 0 } });
    }, []);

    return <LoginView goToRegistration={goToRegistration} />;
};

export default LoginPage;
