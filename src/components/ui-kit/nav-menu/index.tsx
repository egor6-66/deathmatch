'use client';

import classNames from 'classnames';

import { Link } from '@/components/ui-kit';

import * as NavMenuTypes from './interface';

import styles from './styles.module.scss';

function NavMenu(props: NavMenuTypes.Props) {
    const { items, className, direction = 'column', ...rest } = props;

    return (
        <menu className={classNames(className, styles.navMenu, styles[direction])} {...rest}>
            {items.map((i) => (
                <Link key={i.id} href={i.path} onMouseEnter={i?.onMouseEnter}>
                    {i.title}
                </Link>
            ))}
        </menu>
    );
}

export type { NavMenuTypes };

export default NavMenu;
