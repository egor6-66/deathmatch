'use client';

import { NavMenu, NavMenuTypes, Title } from '@/shared/ui';

import styles from './styles.module.scss';

const BasicPage = () => {
    const menuItems: NavMenuTypes.IItem[] = [
        // { id: 0, title: 'Назад', path: paths.home.OPTIONS, onMouseEnter: () => homePagesMotion.setCoord({ initial: { y: height }, exit: { y: -height } }) },
    ];

    return (
        <section className={styles.BasicPage}>
            <Title blink>ОСНОВНЫЕ НАСТРОЙКИ</Title>
            <NavMenu items={menuItems} className={styles.menu} />
        </section>
    );
};

export default BasicPage;
