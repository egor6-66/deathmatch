'use client';

import { NavMenu, NavMenuTypes } from '@/components/ui-kit';
import { paths } from '@/constants';
import { motionStore } from '@/stores';

import styles from './styles.module.scss';

function MainPage() {
    const homePagesMotion = motionStore.use.homePagesMotion();

    const menuItems: NavMenuTypes.Item[] = [
        {
            id: 0,
            title: 'Создать сервер',
            path: paths.home.CREATE_SERVER,
            onMouseEnter: () => homePagesMotion.setCoord({ initial: { y: -900 }, exit: { y: 900 } }),
        },
        {
            id: 1,
            title: 'Найти сервер',
            path: paths.home.FIND_SERVER,
            onMouseEnter: () => homePagesMotion.setCoord({ initial: { y: -900 }, exit: { y: 900 } }),
        },
        { id: 2, title: 'Настройки', path: paths.home.OPTIONS, onMouseEnter: () => homePagesMotion.setCoord({ initial: { x: 900 }, exit: { x: -900 } }) },
    ];

    return (
        <section className={styles.mainPage}>
            <NavMenu items={menuItems} className={styles.menu} />
        </section>
    );
}

export default MainPage;
