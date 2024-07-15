'use client';

import { NavMenu, NavMenuTypes } from '@/components/ui-kit';
import { paths } from '@/constants';
import { useWindowSizeObserver } from '@/hooks';
import { motionStore } from '@/stores';

import styles from './styles.module.scss';

function MainPage() {
    const homePagesMotion = motionStore.use.homePagesMotion();

    const { height, width } = useWindowSizeObserver({
        debounceDelay: 1000,
    });

    const serverCoords = () => {
        homePagesMotion.setCoord({ initial: { y: -height }, exit: { y: height } });
    };

    const menuItems: NavMenuTypes.Item[] = [
        { id: 0, title: 'Создать сервер', path: paths.home.CREATE_SERVER, onMouseEnter: serverCoords },
        { id: 1, title: 'Найти сервер', path: paths.home.FIND_SERVER, onMouseEnter: serverCoords },
        { id: 2, title: 'Настройки', path: paths.home.OPTIONS, onMouseEnter: () => homePagesMotion.setCoord({ initial: { x: width }, exit: { x: -width } }) },
    ];

    return (
        <section className={styles.mainPage}>
            <NavMenu items={menuItems} className={styles.menu} />
        </section>
    );
}

export default MainPage;
