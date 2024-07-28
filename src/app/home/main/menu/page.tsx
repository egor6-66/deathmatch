'use client';

import MenuView from '@/app/home/main/menu/view';
import { paths } from '@/shared/constants';
import { authApi } from '@/shared/gql';

const MenuPage = () => {
    const logout = authApi.logout();

    const menuItems: Array<IMenuItem<{ path: string; page: keyof typeof paths.main | keyof typeof paths.auth }>> = [
        { id: 0, title: 'Сервер', payload: { path: paths.server.CREATE, page: 'SERVER' } },
        { id: 1, title: 'Настройки', payload: { path: paths.main.OPTIONS, page: 'OPTIONS' } },
        { id: 2, title: 'Выход', payload: { path: paths.auth.LOGIN, page: 'LOGIN' }, onClick: logout },
    ];

    return <MenuView menuItems={menuItems} />;
};

export default MenuPage;
