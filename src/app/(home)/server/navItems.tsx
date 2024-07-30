import { paths } from '@/shared/constants';
import { Link } from '@/shared/ui';

const navItems = () => {
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
            element: (
                // <SetHomePageCoords from={'SERVER'} to={'MAIN'}>
                <Link href={paths.home.MAIN}>ВУРНУТЬСЯ В МЕНЮ</Link>
                // </SetHomePageCoords>
            ),
        },
    ];
};

export default navItems;
