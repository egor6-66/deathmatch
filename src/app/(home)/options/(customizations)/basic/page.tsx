'use client';

import { NavMenu, NavMenuTypes, Title } from '@/components/ui-kit';
import { paths } from '@/constants';
import { useWindowSizeObserver } from '@/hooks';
import { motionStore } from '@/stores';

import styles from './styles.module.scss';

function BasicPage() {
    const homePagesMotion = motionStore.use.homePagesMotion();

    const { height } = useWindowSizeObserver({
        debounceDelay: 1000,
    });

    const menuItems: NavMenuTypes.Item[] = [
        { id: 0, title: 'Назад', path: paths.home.OPTIONS, onMouseEnter: () => homePagesMotion.setCoord({ initial: { y: height }, exit: { y: -height } }) },
    ];

    return (
        <section className={styles.BasicPage}>
            <Title blink>ОСНОВНЫЕ НАСТРОЙКИ</Title>
            <NavMenu items={menuItems} className={styles.menu} />
        </section>
    );
}

export default BasicPage;
