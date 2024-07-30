'use client';

import { useWindowSizeObserver } from 'react-screen-hooks';

import { transitionStore } from '@/shared/stores';

const navItems = () => {
    const { width } = useWindowSizeObserver({ debounceDelay: 1000 });
    const home = transitionStore.use.home();

    const goToMain = async () => {
        home.set({ page: 'MAIN', animations: { variants: { exit: { x: -width }, animate: { x: 0 }, initial: { x: width } } } });
        // homePage.set('MAIN');
    };

    const serverPagesTransition = () => {
        // serverPagesAnimations.set({ variants: { exit: { opacity: 0 }, animate: { opacity: 1 }, initial: { opacity: 0 } } });
    };

    return [
        {
            id: 0,
            title: 'МОИ СЕРВЕРА',
            onClick: serverPagesTransition,
        },
        {
            id: 1,
            title: 'СОЗДАТЬ СЕРВЕР',
            onClick: serverPagesTransition,
        },
        {
            id: 2,
            title: 'ПОИСК СЕРВЕРОВ',
            onClick: serverPagesTransition,
        },
        {
            id: 3,
            title: 'ВЕРНУТЬСЯ НА ГЛАВНУЮ',
            onClick: goToMain,
        },
    ] as IMenuItem[];
};

export default navItems;
