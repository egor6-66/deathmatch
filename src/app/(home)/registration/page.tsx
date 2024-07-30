'use client';

import { useWindowSizeObserver } from 'react-screen-hooks';

import homePagesStore from '@/app/(home)/store';
import { authApi } from '@/shared/gql';
import { Input } from '@/shared/ui';

import RegistrationView from './view';

const RegistrationPage = () => {
    const { width, height } = useWindowSizeObserver({ debounceDelay: 1000 });

    const animations = homePagesStore.use.animations();
    const page = homePagesStore.use.page();

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
            animations.set({ variants: { exit: { x: -width, y: height }, animate: { x: 0, y: 0 }, initial: { x: width, y: -height } } });
            page.set('MAIN');
        } catch (e) {
            password.setError('error');
        }
    };

    const goToLogin = () => {
        animations.set({ variants: { exit: { x: -width }, animate: { x: 0 }, initial: { x: width } } });
        page.set('LOGIN');
    };

    return <RegistrationView inputs={{ nickname, password }} handleRegistration={handleRegistration} goToLogin={goToLogin} />;
};

export default RegistrationPage;
