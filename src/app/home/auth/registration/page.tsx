'use client';

import { useRouter } from 'next/navigation';

import { paths } from '@/shared/constants';
import { authApi } from '@/shared/gql';
import { Input } from '@/shared/ui';

import RegistrationView from './view';

const RegistrationPage = () => {
    const { replace } = useRouter();

    const nickname = Input.use({ cut: /\s/ });
    const password = Input.use({ cut: /\s/ });

    const checkUniqueNickname = authApi.checkUniqueNickname();
    const registration = authApi.registration();

    const handleRegistration = async () => {
        try {
            // if (nickname.value.length < 6) return nickname.setError('Слишком короткий nickname');
            // if (password.value.length < 6) return password.setError('Слишком короткий password');
            // const check = await checkUniqueNickname({ variables: { nickname: nickname.value } });
            // if (!check.data?.uniqueNickname) return nickname.setError('nickname уже занят');
            // await registration({ nickname: nickname.value, password: password.value });
            replace(paths.main.MENU);
        } catch (e) {
            password.setError('error');
        }
    };

    return <RegistrationView inputs={{ nickname, password }} handleRegistration={handleRegistration} />;
};

export default RegistrationPage;
