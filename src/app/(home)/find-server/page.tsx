'use client';

import { NavMenu, NavMenuTypes } from '@/components/ui-kit';
import { paths } from '@/constants';
import { useWindowSizeObserver } from '@/hooks';
import { motionStore } from '@/stores';

import styles from './styles.module.scss';

function FindServerPage() {
    const homePagesMotion = motionStore.use.homePagesMotion();

    const { height } = useWindowSizeObserver({
        debounceDelay: 1000,
    });

    const menuItems: NavMenuTypes.Item[] = [
        { id: 0, title: 'Назад', path: paths.home.MAIN, onMouseEnter: () => homePagesMotion.setCoord({ initial: { y: height }, exit: { y: -height } }) },
    ];

    return (
        <section className={styles.findServerPage}>
            <NavMenu items={menuItems} className={styles.menu} />
        </section>
    );
}

export default FindServerPage;
