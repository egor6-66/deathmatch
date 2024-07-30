'use client';

import { useWindowSizeObserver } from 'react-screen-hooks';

import homePagesStore from '@/app/(home)/store';
import { paths } from '@/shared/constants';
import { Button, Link } from '@/shared/ui';

const navItems = () => {
    const { width } = useWindowSizeObserver({ debounceDelay: 1000 });
    const animations = homePagesStore.use.animations();
    const location = homePagesStore.use.location();

    const goToMain = async () => {
        animations.set({ variants: { exit: { x: -width }, animate: { x: 0 }, initial: { x: width } } });
        location.set({ page: 'MAIN', url: paths.home.MAIN });
    };

    return [
        {
            id: 0,
            element: <Link href={paths.server.MY}>МОИ СЕРВЕРА</Link>,
        },
        {
            id: 1,
            element: <Link href={paths.server.CREATE}>СОЗДАТЬ СЕРВЕР</Link>,
        },
        {
            id: 2,
            element: <Link href={paths.server.FIND}>ПОИСК СЕРВЕРОВ</Link>,
        },
        {
            id: 3,
            element: <Button onClick={goToMain}>ВЕРНУТЬСЯ НА ГЛАВНУЮ</Button>,
        },
    ];
};

export default navItems;
