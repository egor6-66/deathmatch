'use client';

import BabylonCanvas from '@/babylon';

import styles from './styles.module.scss';

const Battlefield = () => {
    return (
        <main className={styles.battlefieldPage}>
            <BabylonCanvas mode={'battlefield'} weapon={{ type: 'fireArms' }} />
        </main>
    );
};

export default Battlefield;
