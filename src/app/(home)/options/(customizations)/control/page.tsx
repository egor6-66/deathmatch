'use client';

import { NavMenu, NavMenuTypes } from '@/components/ui-kit';
import { paths } from '@/constants';
import { motionStore } from '@/stores';

import styles from './styles.module.scss';

function Customization() {
    const homePagesMotion = motionStore.use.homePagesMotion();

    const menuItems: NavMenuTypes.Item[] = [
        { id: 0, title: 'Назад', path: paths.home.OPTIONS, onMouseEnter: () => homePagesMotion.setCoord({ initial: { y: 900 }, exit: { y: -900 } }) },
    ];

    return (
        <section className={styles.optionsPage}>
            <NavMenu items={menuItems} className={styles.menu} />
        </section>
    );
}

export default Customization;
