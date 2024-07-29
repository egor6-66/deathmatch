import { homeStore, SetCoords } from '@/app/(home)/utils';
import { paths } from '@/shared/constants';
import { Link } from '@/shared/ui';

const navItems = () => {
    const homePageCoords = homeStore.use.homePageCoords();

    return [
        {
            id: 0,
            element: (
                <Link onMouseEnter={homePageCoords.clear} href={paths.server.MY}>
                    МОИ СЕРВЕРА
                </Link>
            ),
        },
        {
            id: 1,
            element: (
                <Link onMouseEnter={homePageCoords.clear} href={paths.server.CREATE}>
                    СОЗДАТЬ СЕРВЕР
                </Link>
            ),
        },
        {
            id: 2,
            element: (
                <Link onMouseEnter={homePageCoords.clear} href={paths.server.FIND}>
                    ПОИСК СЕРВЕРОВ
                </Link>
            ),
        },
        {
            id: 3,
            element: (
                <SetCoords from={'SERVER'} to={'MAIN'}>
                    <Link href={paths.home.MAIN}>ВУРНУТЬСЯ В МЕНЮ</Link>
                </SetCoords>
            ),
        },
    ];
};

export default navItems;
