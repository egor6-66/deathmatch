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
    handleRegistration: () => void;
}

const RegistrationView = (props: IProps) => {
    const { inputs, handleRegistration } = props;

    const disabled = !inputs.nickname.value || !inputs.password.value || inputs.nickname.isError || inputs.password.isError;

    return (
        <section className={styles.registrationPage}>
            <div className={styles.form}>
                <SetCoords from={'REGISTRATION'} to={'LOGIN'}>
                    <Link href={paths.auth.LOGIN}>go to login</Link>
                </SetCoords>
                <Input attrs={{ ...inputs.nickname.inputAttrs, placeholder: 'NICKNAME' }} errorMessage={inputs.nickname.errorMessage} />
                <Input attrs={{ ...inputs.password.inputAttrs, placeholder: 'PASSWORD' }} errorMessage={inputs.password.errorMessage} />
                <SetCoords from={'REGISTRATION'} to={'MENU'}>
                    <Button disabled={false} onClick={handleRegistration}>
                        send
                    </Button>
                </SetCoords>
            </div>
        </section>
    );
};

export default RegistrationView;
