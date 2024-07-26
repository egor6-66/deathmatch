import React from 'react';

import { paths } from '@/shared/constants';
import { Link } from '@/shared/ui';

import { SetCoords } from '../../utils';

import styles from './styles.module.scss';

const ServerView = () => {
    return (
        <section className={styles.serverPage}>
            <div className={styles.menu}>
                <SetCoords from={'SERVER'} to={'MENU'}>
                    <Link href={paths.main.MENU}>Back</Link>
                </SetCoords>
            </div>
        </section>
    );
};

export default ServerView;
