'use client';

import { useState } from 'react';
import { useWindowSizeObserver } from 'react-screen-hooks';

import { authApi } from '@/shared/gql';
import { transitionStore } from '@/shared/stores';
import { Input } from '@/shared/ui';

import LoginView from './view';

const LoginPage = () => {
    const { width, height } = useWindowSizeObserver({ debounceDelay: 1000 });

    const [error, setError] = useState('');

    const home = transitionStore.use.home();

    const nickname = Input.use({ cut: /\s/ });
    const password = Input.use({ cut: /\s/ });

    const login = authApi.login();

    const handleLogin = async () => {
        try {
            if (nickname.value.length < 6) return nickname.setError('Слишком короткий nickname');
            if (password.value.length < 6) return password.setError('Слишком короткий password');
            await login({ nickname: nickname.value, password: password.value });
            home.set({
                page: 'MAIN',
                animations: { variants: { exit: { x: width, y: height }, animate: { x: 0, y: 0 }, initial: { x: -width, y: -height } } },
            });
        } catch (e) {
            setError('НЕверный логин или пароль');
        }
    };

    const goToRegistration = () => {
        home.set({
            page: 'REGISTRATION',
            animations: { variants: { exit: { x: width }, animate: { x: 0 }, initial: { x: -width } } },
        });
    };

    return <LoginView inputs={{ nickname, password }} handleLogin={handleLogin} error={error} goToRegistration={goToRegistration} />;
};

export default LoginPage;
