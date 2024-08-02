'use client';

import { Button, Input, InputTypes } from '@/shared/ui';

import styles from './styles.module.scss';

interface IProps {
    inputs: {
        nickname: InputTypes.UseReturnedType;
        password: InputTypes.UseReturnedType;
    };
    goToLogin: () => void;
    handleRegistration: () => void;
}

const RegistrationView = (props: IProps) => {
    const { inputs, handleRegistration, goToLogin } = props;

    const disabled = !inputs.nickname.value || !inputs.password.value || inputs.nickname.isError || inputs.password.isError;

    return (
        <section className={styles.registrationPage}>
            <div className={styles.form}>
                <Button onClick={goToLogin}>go to login</Button>

                <Input attrs={{ ...inputs.nickname.inputAttrs, placeholder: 'NICKNAME' }} errorMessage={inputs.nickname.errorMessage} />
                <Input attrs={{ ...inputs.password.inputAttrs, placeholder: 'PASSWORD' }} errorMessage={inputs.password.errorMessage} />

                <Button disabled={disabled} onClick={handleRegistration}>
                    send
                </Button>
            </div>
        </section>
    );
};

export default RegistrationView;
