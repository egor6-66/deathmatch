'use client';

import { NavMenu, NavMenuTypes } from '@/components/ui-kit';
import { paths } from '@/constants';
import { motionStore } from '@/stores';

import styles from './styles.module.scss';

function FindServerPage() {
    const homePagesMotion = motionStore.use.homePagesMotion();

    const menuItems: NavMenuTypes.Item[] = [
        { id: 0, title: 'Назад', path: paths.home.MAIN, onMouseEnter: () => homePagesMotion.setCoord({ initial: { y: 900 }, exit: { y: -900 } }) },
    ];

    return (
        <section className={styles.findServerPage}>
            <NavMenu items={menuItems} className={styles.menu} />
        </section>
    );
}

export default FindServerPage;
