import React from 'react';

import { paths } from '@/shared/constants';
import { Button, Input, InputTypes, Link } from '@/shared/ui';

import styles from './styles.module.scss';

interface IProps {
    inputs: {
        nickname: InputTypes.UseReturnedType;
        password: InputTypes.UseReturnedType;
    };
}

const LoginView = (props: IProps) => {
    const { inputs } = props;

    return (
        <section className={styles.loginPage}>
            <div className={styles.form}>
                <Link href={paths.home.REGISTRATION}>register</Link>
                <Input attrs={{ ...inputs.nickname.inputAttrs, placeholder: 'NICKNAME' }} />
                <Input attrs={{ ...inputs.password.inputAttrs, placeholder: 'PASSWORD' }} />
                <Button>send</Button>
            </div>
        </section>
    );
};

export default LoginView;
