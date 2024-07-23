'use client';

import classNames from 'classnames';

import { Link } from '@/components/ui-kit';

import * as NavMenuTypes from './interface';

import styles from './styles.module.scss';

const NavMenu = (props: NavMenuTypes.IProps) => {
    const { items, className, direction = 'column', ...rest } = props;

    const onMouseEnter = (cb?: () => void) => {
        cb && cb();
    };

    return (
        <menu className={classNames(className, styles.navMenu, styles[direction])} {...rest}>
            {items.map((i) => (
                <Link key={i.id} href={i.path} onMouseEnter={() => onMouseEnter(i.onMouseEnter)}>
                    {i.title}
                </Link>
            ))}
        </menu>
    );
};

export type { NavMenuTypes };

export default NavMenu;
