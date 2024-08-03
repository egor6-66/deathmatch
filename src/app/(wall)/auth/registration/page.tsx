'use client';

import { useWindowSizeObserver } from 'react-screen-hooks';

import { authApi } from '@/shared/gql';
import { Input } from '@/shared/ui';

import { transitionStore } from '../../_utils';

import RegistrationView from './view';

const RegistrationPage = () => {
    const { width, height } = useWindowSizeObserver({ debounceDelay: 1000 });

    const wall = transitionStore.use.wall();

    const nickname = Input.use({ cut: /\s/ });
    const password = Input.use({ cut: /\s/ });

    const checkUniqueNickname = authApi.checkUniqueNickname();
    const registration = authApi.registration();

    const handleRegistration = async () => {
        try {
            if (nickname.value.length < 6) return nickname.setError('Слишком короткий nickname');
            if (password.value.length < 6) return password.setError('Слишком короткий password');
            const check = await checkUniqueNickname({ variables: { nickname: nickname.value } });
            if (!check.data?.uniqueNickname) return nickname.setError('nickname уже занят');
            await registration({ nickname: nickname.value, password: password.value });
            wall.set({
                page: 'MAIN',
                animations: { variants: { exit: { x: -width, y: height }, animate: { x: 0, y: 0 }, initial: { x: width, y: -height } } },
            });
        } catch (e) {
            password.setError('error');
        }
    };

    const goToLogin = () => {
        wall.set({
            page: 'LOGIN',
            animations: { variants: { exit: { x: -width }, animate: { x: 0 }, initial: { x: width } } },
        });
    };

    return <RegistrationView inputs={{ nickname, password }} handleRegistration={handleRegistration} goToLogin={goToLogin} />;
};

export default RegistrationPage;
