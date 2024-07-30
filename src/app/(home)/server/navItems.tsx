'use client';

import { useWindowSizeObserver } from 'react-screen-hooks';

import homePagesStore from '@/app/(home)/store';

const navItems = () => {
    const { width } = useWindowSizeObserver({ debounceDelay: 1000 });
    const animations = homePagesStore.use.animations();
    const page = homePagesStore.use.page();

    const goToMain = async () => {
        animations.set({ variants: { exit: { x: -width }, animate: { x: 0 }, initial: { x: width } } });
        page.set('MAIN');
    };

    return [
        {
            id: 0,
            title: 'МОИ СЕРВЕРА',
            onClick: () => '',
        },
        {
            id: 1,
            title: 'СОЗДАТЬ СЕРВЕР',
        },
        {
            id: 2,
            title: 'ПОИСК СЕРВЕРОВ',
        },
        {
            id: 3,
            title: 'ВЕРНУТЬСЯ НА ГЛАВНУЮ',
            onClick: goToMain,
        },
    ] as IMenuItem[];
};

export default navItems;
