'use client';

import { NavMenu, NavMenuTypes } from '@/components/ui-kit';
import { paths } from '@/constants';
import { useWindowSizeObserver } from '@/hooks';
import { motionStore } from '@/stores';

import styles from './styles.module.scss';

function OptionsPage() {
    const homePagesMotion = motionStore.use.homePagesMotion();

    const { width, height } = useWindowSizeObserver({
        debounceDelay: 1000,
    });

    const optimizationCoords = () => {
        homePagesMotion.setCoord({ initial: { y: -height }, exit: { y: height } });
    };

    const menuItems: NavMenuTypes.Item[] = [
        { id: 0, title: 'ОСНОВНЫЕ', path: paths.customization.BASIC, onMouseEnter: optimizationCoords },
        { id: 1, title: 'УПРАВЛЕНИЕ', path: paths.customization.CONTROL, onMouseEnter: optimizationCoords },
        { id: 2, title: 'ПЕРСОНАЖ', path: paths.customization.CHARACTER, onMouseEnter: optimizationCoords },
        { id: 3, title: 'ОРУЖИЕ', path: paths.customization.WEAPON, onMouseEnter: optimizationCoords },
        { id: 4, title: 'НАЗАД', path: paths.home.MAIN, onMouseEnter: () => homePagesMotion.setCoord({ initial: { x: -width }, exit: { x: width } }) },
    ];

    return (
        <section className={styles.optionsPage}>
            <NavMenu items={menuItems} className={styles.menu} />
        </section>
    );
}

export default OptionsPage;
