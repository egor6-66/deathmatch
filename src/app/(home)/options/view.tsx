import React from 'react';

import { paths } from '@/shared/constants';
import { Link } from '@/shared/ui';

import styles from './styles.module.scss';

const OptionsView = () => {
    return (
        <section className={styles.optionsPage}>
            <div className={styles.menu}>
                {/*<SetHomePageCoords from={'OPTIONS'} to={'MAIN'}>*/}
                <Link href={paths.home.MAIN}>Back</Link>
                {/*</SetHomePageCoords>*/}
            </div>
        </section>
    );
};

export default OptionsView;
