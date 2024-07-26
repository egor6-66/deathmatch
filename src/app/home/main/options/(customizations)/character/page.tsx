'use client';

import { useWindowSizeObserver } from '@/shared/hooks';
import { NavMenu, NavMenuTypes } from '@/shared/ui';

import styles from './styles.module.scss';

const CharacterPage = () => {
    const { height } = useWindowSizeObserver({
        debounceDelay: 1000,
    });

    const menuItems: NavMenuTypes.IItem[] = [
        // { id: 0, title: 'Назад', path: paths.home.OPTIONS, onMouseEnter: () => homePagesMotion.setCoord({ initial: { y: height }, exit: { y: -height } }) },
    ];

    return (
        <section className={styles.optionsPage}>
            <NavMenu items={menuItems} className={styles.menu} />
        </section>
    );
};

export default CharacterPage;