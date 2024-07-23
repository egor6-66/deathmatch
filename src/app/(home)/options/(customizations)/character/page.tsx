'use client';

import { NavMenu, NavMenuTypes } from '@/components/ui-kit';
import { paths } from '@/constants';
import { useWindowSizeObserver } from '@/hooks';
import { motionStore } from '@/stores';

import styles from './styles.module.scss';

const CharacterPage = () => {
    const homePagesMotion = motionStore.use.homePagesMotion();

    const { height } = useWindowSizeObserver({
        debounceDelay: 1000,
    });

    const menuItems: NavMenuTypes.IItem[] = [
        { id: 0, title: 'Назад', path: paths.home.OPTIONS, onMouseEnter: () => homePagesMotion.setCoord({ initial: { y: height }, exit: { y: -height } }) },
    ];

    return (
        <section className={styles.optionsPage}>
            <NavMenu items={menuItems} className={styles.menu} />
        </section>
    );
};

export default CharacterPage;
