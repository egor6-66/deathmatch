import { Button, Input, InputTypes } from '@/shared/ui';

import styles from './styles.module.scss';

interface IProps {
    inputs: {
        nickname: InputTypes.UseReturnedType;
        password: InputTypes.UseReturnedType;
    };
    handleLogin: () => void;
    goToRegistration: () => void;
    error: string;
}

const LoginView = (props: IProps) => {
    const { inputs, handleLogin, goToRegistration, error } = props;

    const disabled = !inputs.nickname.value || !inputs.password.value || inputs.nickname.isError || inputs.password.isError;

    return (
        <section className={styles.loginPage}>
            <div className={styles.form}>
                <Button onClick={goToRegistration}>go to registration</Button>
                <Input attrs={{ ...inputs.nickname.inputAttrs, placeholder: 'NICKNAME' }} errorMessage={inputs.nickname.errorMessage} />
                <Input attrs={{ ...inputs.password.inputAttrs, placeholder: 'PASSWORD' }} errorMessage={inputs.password.errorMessage} />
                {error && <p>{error}</p>}
                <Button disabled={disabled} onClick={handleLogin}>
                    send
                </Button>
            </div>
        </section>
    );
};

export default LoginView;
