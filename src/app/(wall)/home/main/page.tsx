'use client';

import { useWindowSizeObserver } from 'react-screen-hooks';

import { paths } from '@/shared/constants';
import { authApi } from '@/shared/gql';

import { transitionStore } from '../../_utils';

import MainView from './view';

const MainPage = () => {
    const logout = authApi.logout();

    const { width, height } = useWindowSizeObserver({ debounceDelay: 1000 });

    const wall = transitionStore.use.wall();

    const handleTransition = (targetPage: paths.HomePagesTypes, exit: number, initial: number) => {
        wall.set({
            page: targetPage,
            animations: { variants: { exit: { x: exit }, animate: { x: 0 }, initial: { x: initial } } },
        });
    };

    const handleLogout = async () => {
        await logout();
        wall.set({
            page: 'LOGIN',
            animations: { variants: { exit: { x: -width, y: -height }, animate: { x: 0, y: 0 }, initial: { x: width, y: height } } },
        });
    };

    const menuItems: Array<IMenuItem> = [
        { id: 0, title: 'Сервер', onClick: () => handleTransition('CREATE_SERVER', width, -width) },
        { id: 1, title: 'Настройки', onClick: () => handleTransition('SETTINGS', -width, width) },
        { id: 2, title: 'Выход', onClick: handleLogout },
    ];

    return <MainView menuItems={menuItems} />;
};

export default MainPage;
