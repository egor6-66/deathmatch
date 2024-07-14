'use client';

import { NavMenu, NavMenuTypes } from '@/components/ui-kit';
import { paths } from '@/constants';

import routingTransitionStore from '../routingTransitionStore';

import styles from './styles.module.scss';

function MainPage() {
    const motion = routingTransitionStore.use.motion();

    const menuItems: NavMenuTypes.Item[] = [
        { id: 0, title: 'Создать сервер', path: paths.home.CREATE_SERVER, onMouseEnter: () => motion.set({ initial: { y: -900 }, exit: { y: 900 } }) },
        { id: 1, title: 'Найти сервер', path: paths.home.FIND_SERVER, onMouseEnter: () => motion.set({ initial: { y: -900 }, exit: { y: 900 } }) },
        { id: 2, title: 'Настройки', path: paths.home.OPTIONS, onMouseEnter: () => motion.set({ initial: { x: 900 }, exit: { x: -900 } }) },
    ];

    function wws(a: number) {
        console.log(a);
    }

    // if (1 == 2) {
    //     console.log('wd');
    // }

    wws('fsd');
    console.log('wda');

    return (
        <section className={styles.mainPage}>
            <NavMenu items={menuItems} className={styles.menu} />
        </section>
    );
}

export default MainPage;
