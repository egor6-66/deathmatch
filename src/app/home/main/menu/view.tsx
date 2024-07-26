import React from 'react';

import { paths } from '@/shared/constants';
import Link from '@/shared/ui/link';

import { SetCoords } from '../../utils';

import styles from './styles.module.scss';

interface IProps {
    menuItems: Array<IMenuItem<{ path: string; page: keyof typeof paths.main | keyof typeof paths.auth }>>;
}

const MenuView = (props: IProps) => {
    const { menuItems } = props;

    return (
        <section className={styles.menuPage}>
            <div className={styles.menu}>
                {menuItems.map((i) => (
                    <SetCoords key={i.id} from={'MENU'} to={i.payload.page}>
                        <Link key={i.id} href={i.payload.path}>
                            {i.title}
                        </Link>
                    </SetCoords>
                ))}
            </div>
        </section>
    );
};

export default MenuView;
