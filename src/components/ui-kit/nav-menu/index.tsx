'use client';

import classNames from 'classnames';

import { Link } from '@/components/ui-kit';
import { useAudio } from '@/hooks';

import * as NavMenuTypes from './interface';

import styles from './styles.module.scss';

function NavMenu(props: NavMenuTypes.Props) {
    const { items, className, direction = 'column', ...rest } = props;

    const { play } = useAudio('https://813a9746-5e51-4b1a-af22-34e7e233e254.selstorage.ru/sounds/app/menu-hover.mp3');

    const onMouseEnter = (cb?: () => void) => {
        cb && cb();
        play();
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
}

export type { NavMenuTypes };

export default NavMenu;
