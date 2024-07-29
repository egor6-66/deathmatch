import { paths } from '@/shared/constants';
import { SetHomePageCoords } from '@/shared/hoks';
import Link from '@/shared/ui/link';

import styles from './styles.module.scss';

interface IProps {
    menuItems: Array<IMenuItem<{ path: string; page: keyof typeof paths.home }>>;
}

const MainView = (props: IProps) => {
    const { menuItems } = props;

    return (
        <section className={styles.menuPage}>
            <div className={styles.menu}>
                {menuItems.map((i) => (
                    <SetHomePageCoords key={i.id} from={'MAIN'} to={i.payload.page}>
                        <Link onClick={i.onClick} key={i.id} href={i.payload.path}>
                            {i.title}
                        </Link>
                    </SetHomePageCoords>
                ))}
            </div>
        </section>
    );
};

export default MainView;
