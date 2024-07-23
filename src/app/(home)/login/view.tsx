import React from 'react';

import { Button } from '@/components/ui-kit';

import styles from './styles.module.scss';

interface IProps {
    goToRegistration: () => void;
}

const LoginView = (props: IProps) => {
    const { goToRegistration } = props;

    return (
        <section className={styles.loginPage}>
            <div className={styles.form}>
                <Button onClick={goToRegistration}>goToRegistration</Button>
            </div>
        </section>
    );
};

export default LoginView;
