'use client';

import routingTransitionStore from '@/app/(home)/routingTransitionStore';
import { NavMenu, NavMenuTypes } from '@/components/ui-kit';
import { paths } from '@/constants';

import styles from './styles.module.scss';

function CharacterPage() {
    const motion = routingTransitionStore.use.motion();

    const menuItems: NavMenuTypes.Item[] = [
        { id: 0, title: 'Назад', path: paths.home.OPTIONS, onMouseEnter: () => motion.set({ initial: { y: 900 }, exit: { y: -900 } }) },
    ];

    return (
        <section className={styles.optionsPage}>
            <NavMenu items={menuItems} className={styles.menu} />
        </section>
    );
}

export default CharacterPage;
