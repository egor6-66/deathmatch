import React from 'react';

import { paths } from '@/shared/constants';
import { Button, Input, InputTypes, Link } from '@/shared/ui';

import { SetCoords } from '../../utils';

import styles from './styles.module.scss';

interface IProps {
    inputs: {
        nickname: InputTypes.UseReturnedType;
        password: InputTypes.UseReturnedType;
    };
    handleLogin: () => void;
    error: string;
}

const LoginView = (props: IProps) => {
    const { inputs, handleLogin, error } = props;

    const disabled = !inputs.nickname.value || !inputs.password.value || inputs.nickname.isError || inputs.password.isError;

    return (
        <section className={styles.loginPage}>
            <div className={styles.form}>
                <SetCoords from={'LOGIN'} to={'REGISTRATION'}>
                    <Link href={paths.auth.REGISTRATION}>go to registration</Link>
                </SetCoords>
                <Input attrs={{ ...inputs.nickname.inputAttrs, placeholder: 'NICKNAME' }} errorMessage={inputs.nickname.errorMessage} />
                <Input attrs={{ ...inputs.password.inputAttrs, placeholder: 'PASSWORD' }} errorMessage={inputs.password.errorMessage} />
                {error && <p>{error}</p>}
                <SetCoords from={'LOGIN'} to={'MENU'}>
                    <Button disabled={disabled} onClick={handleLogin}>
                        send
                    </Button>
                </SetCoords>
            </div>
        </section>
    );
};

export default LoginView;
