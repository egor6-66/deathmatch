import React from 'react';

import { paths } from '@/shared/constants';
import Link from '@/shared/ui/link';

import { SetCoords } from '../utils';

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
                    <SetCoords key={i.id} from={'MAIN'} to={i.payload.page}>
                        <Link onClick={i.onClick} key={i.id} href={i.payload.path}>
                            {i.title}
                        </Link>
                    </SetCoords>
                ))}
            </div>
        </section>
    );
};

export default MainView;
