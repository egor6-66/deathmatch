import React from 'react';

import { Button } from '@/components/ui-kit';

import styles from './styles.module.scss';

interface IProps {
    goToLogin: () => void;
}

const RegistrationView = (props: IProps) => {
    const { goToLogin } = props;

    return (
        <section className={styles.registrationPage}>
            <div className={styles.form}>
                <Button onClick={goToLogin}>goToLogin</Button>
            </div>
        </section>
    );
};

export default RegistrationView;
