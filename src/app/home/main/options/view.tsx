import React from 'react';

import { paths } from '@/shared/constants';
import { Link } from '@/shared/ui';

import { SetCoords } from '../../utils';

import styles from './styles.module.scss';

const OptionsView = () => {
    return (
        <section className={styles.optionsPage}>
            <div className={styles.menu}>
                <SetCoords from={'OPTIONS'} to={'MENU'}>
                    <Link href={paths.main.MENU}>Back</Link>
                </SetCoords>
            </div>
        </section>
    );
};

export default OptionsView;
