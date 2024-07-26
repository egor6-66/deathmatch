'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { paths } from '@/shared/constants';
import { authApi } from '@/shared/gql';
import { Input } from '@/shared/ui';

import LoginView from './view';

const LoginPage = () => {
    const { replace } = useRouter();

    const [error, setError] = useState('');

    const nickname = Input.use({ cut: /\s/ });
    const password = Input.use({ cut: /\s/ });

    const login = authApi.login();

    const handleLogin = async () => {
        try {
            if (nickname.value.length < 6) return nickname.setError('Слишком короткий nickname');
            if (password.value.length < 6) return password.setError('Слишком короткий password');
            await login({ nickname: nickname.value, password: password.value });
            replace(paths.main.MENU);
        } catch (e) {
            setError('НЕверный логин или пароль');
        }
    };

    return <LoginView inputs={{ nickname, password }} handleLogin={handleLogin} error={error} />;
};

export default LoginPage;
