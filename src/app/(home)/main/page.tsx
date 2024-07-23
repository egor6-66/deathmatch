'use client';

import { paths } from '@/shared/constants';
import { NavMenu, NavMenuTypes } from '@/shared/ui';

import { useWindowSizeObserver } from '../../../shared/hooks';

import styles from './styles.module.scss';

const MainPage = () => {
    const { height, width } = useWindowSizeObserver({
        debounceDelay: 1000,
    });

    const serverCoords = () => {
        // homePagesMotion.setCoord({ initial: { y: -height }, exit: { y: height } });
    };

    const menuItems: NavMenuTypes.IItem[] = [
        // { id: 0, title: 'Создать сервер', path: paths.game.BATTLEFIELD, onMouseEnter: serverCoords },
        // // { id: 1, title: 'Найти сервер', path: paths.home.FIND_SERVER, onMouseEnter: serverCoords },
        // { id: 2, title: 'Настройки', path: paths.home.OPTIONS, onMouseEnter: () => homePagesMotion.setCoord({ initial: { x: width }, exit: { x: -width } }) },
    ];

    return (
        <section className={styles.mainPage}>
            <NavMenu items={menuItems} className={styles.menu} />
        </section>
    );
};

export default MainPage;
