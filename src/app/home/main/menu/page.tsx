'use client';

import MenuView from '@/app/home/main/menu/view';
import { paths } from '@/shared/constants';
import { userApi } from '@/shared/gql';

const MenuPage = () => {
    // const user = userApi.getViewer();

    const menuItems: Array<IMenuItem<{ path: string; page: keyof typeof paths.main | keyof typeof paths.auth }>> = [
        { id: 0, title: 'Сервер', payload: { path: paths.main.SERVER, page: 'SERVER' } },
        { id: 1, title: 'Настройки', payload: { path: paths.main.OPTIONS, page: 'OPTIONS' } },
        { id: 2, title: 'Выход', payload: { path: paths.auth.LOGIN, page: 'LOGIN' } },
        { id: 3, title: 'reg', payload: { path: paths.auth.REGISTRATION, page: 'REGISTRATION' } },
    ];

    return <MenuView menuItems={menuItems} />;
};

export default MenuPage;
