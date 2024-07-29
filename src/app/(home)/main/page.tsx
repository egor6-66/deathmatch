'use client';

import { paths } from '@/shared/constants';
import { authApi } from '@/shared/gql';

import MainView from './view';

const MainPage = () => {
    const logout = authApi.logout();

    const menuItems: Array<IMenuItem<{ path: string; page: keyof typeof paths.home }>> = [
        { id: 0, title: 'Сервер', payload: { path: paths.server.CREATE, page: 'SERVER' } },
        { id: 1, title: 'Настройки', payload: { path: paths.home.OPTIONS, page: 'OPTIONS' } },
        { id: 2, title: 'Выход', payload: { path: paths.home.LOGIN, page: 'LOGIN' }, onClick: logout },
    ];

    return <MainView menuItems={menuItems} />;
};

export default MainPage;
