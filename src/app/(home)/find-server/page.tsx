'use client';

import routingTransitionStore from '@/app/(home)/routingTransitionStore';
import { NavMenu, NavMenuTypes } from '@/components/ui-kit';
import { paths } from '@/constants';

import styles from './styles.module.scss';

function FindServerPage() {
    const motion = routingTransitionStore.use.motion();

    const menuItems: NavMenuTypes.Item[] = [
        { id: 0, title: 'Назад', path: paths.home.MAIN, onMouseEnter: () => motion.set({ initial: { y: 900 }, exit: { y: -900 } }) },
    ];

    return (
        <section className={styles.findServerPage}>
            <NavMenu items={menuItems} className={styles.menu} />
        </section>
    );
}

export default FindServerPage;
