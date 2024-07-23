'use client';

import { paths } from '@/shared/constants';
import { NavMenu, NavMenuTypes } from '@/shared/ui';

import { useWindowSizeObserver } from '../../../shared/hooks';

import styles from './styles.module.scss';

const CreateServerPage = () => {
    // const homePagesMotion = motionStore.use.homePagesMotion();

    const { height } = useWindowSizeObserver({
        debounceDelay: 1000,
    });

    const menuItems: NavMenuTypes.IItem[] = [
        // { id: 0, title: 'Назад', path: paths.home.MAIN, onMouseEnter: () => homePagesMotion.setCoord({ initial: { y: height }, exit: { y: -height } }) },
    ];

    return (
        <section className={styles.createServer}>
            <NavMenu items={menuItems} className={styles.menu} />
        </section>
    );
};

export default CreateServerPage;
