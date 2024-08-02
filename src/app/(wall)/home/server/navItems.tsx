'use client';

import { useWindowSizeObserver } from 'react-screen-hooks';

import { paths } from '@/shared/constants';
import { transitionStore } from '@/shared/stores';

const navItems = () => {
    const { width } = useWindowSizeObserver({ debounceDelay: 1000 });
    const wall = transitionStore.use.wall();
    const server = transitionStore.use.server();

    const goToMain = async () => {
        wall.set({ page: 'MAIN', animations: { variants: { exit: { x: -width }, animate: { x: 0 }, initial: { x: width } } } });
    };

    const serverPagesTransition = (targetPage: paths.ServerPagesTypes) => {
        server.set({ page: targetPage, animations: { variants: { exit: { opacity: 0 }, animate: { opacity: 1 }, initial: { opacity: 0 } } } });
    };

    return [
        {
            id: 0,
            title: 'МОИ СЕРВЕРА',
            onClick: () => serverPagesTransition('MY'),
        },
        {
            id: 1,
            title: 'СОЗДАТЬ СЕРВЕР',
            onClick: () => serverPagesTransition('CREATE'),
        },
        {
            id: 2,
            title: 'ПОИСК СЕРВЕРОВ',
            onClick: () => serverPagesTransition('FIND'),
        },
        {
            id: 3,
            title: 'ВЕРНУТЬСЯ НА ГЛАВНУЮ',
            onClick: goToMain,
        },
    ] as IMenuItem[];
};

export default navItems;
