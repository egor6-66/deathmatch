'use client';

import { useWindowSizeObserver } from 'react-screen-hooks';

import homePagesStore from '@/app/(home)/store';
import { paths } from '@/shared/constants';
import { authApi } from '@/shared/gql';

import MainView from './view';

const MainPage = () => {
    const logout = authApi.logout();

    const { width, height } = useWindowSizeObserver({ debounceDelay: 1000 });

    const animations = homePagesStore.use.animations();
    const page = homePagesStore.use.page();

    const handleTransition = (targetPage: keyof typeof paths.home, exit: number, initial: number) => {
        animations.set({ variants: { exit: { x: exit }, animate: { x: 0 }, initial: { x: initial } } });
        page.set(targetPage);
    };

    const handleLogout = async () => {
        await logout();
        animations.set({ variants: { exit: { x: -width, y: -height }, animate: { x: 0, y: 0 }, initial: { x: width, y: height } } });
        page.set('LOGIN');
    };

    const menuItems: Array<IMenuItem> = [
        { id: 0, title: 'Сервер', onClick: () => handleTransition('SERVER', width, -width) },
        { id: 1, title: 'Настройки', onClick: () => handleTransition('SETTINGS', -width, width) },
        { id: 2, title: 'Выход', onClick: handleLogout },
    ];

    return <MainView menuItems={menuItems} />;
};

export default MainPage;
