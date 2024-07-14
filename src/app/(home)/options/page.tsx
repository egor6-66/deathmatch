'use client';

import routingTransitionStore from '@/app/(home)/routingTransitionStore';
import { NavMenu, NavMenuTypes } from '@/components/ui-kit';
import { paths } from '@/constants';

import styles from './styles.module.scss';

function OptionsPage() {
    const motion = routingTransitionStore.use.motion();

    const optimizationCoords = () => {
        motion.set({ initial: { y: -900 }, exit: { y: 900 } });
    };

    console.log(typeof paths.customization.CONTROL);

    const menuItems: NavMenuTypes.Item[] = [
        { id: 0, title: 'УПРАВЛЕНИЕ', path: paths.customization.CONTROL, onMouseEnter: optimizationCoords },
        { id: 1, title: 'ПЕРСОНАЖ', path: paths.customization.CHARACTER, onMouseEnter: optimizationCoords },
        { id: 2, title: 'ОРУЖИЕ', path: paths.customization.WEAPON, onMouseEnter: optimizationCoords },
        { id: 3, title: 'НАЗАД', path: paths.home.MAIN, onMouseEnter: () => motion.set({ initial: { x: -900 }, exit: { x: 900 } }) },
    ];

    return (
        <section className={styles.optionsPage}>
            <NavMenu items={menuItems} className={styles.menu} />
        </section>
    );
}

export default OptionsPage;
