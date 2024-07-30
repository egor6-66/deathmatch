import { MouseEvent } from 'react';
import classNames from 'classnames';
import { default as NextLink } from 'next/link';
import { usePathname } from 'next/navigation';

import * as LinkTypes from './interface';

import styles from './styles.module.scss';

const Link = (props: LinkTypes.IProps) => {
    const { children, href, ...rest } = props;

    const pathName = usePathname();

    return (
        <NextLink {...rest} href={href} className={classNames(styles.link, pathName.includes(href as string) ? styles.active : '')}>
            {children}
        </NextLink>
    );
};

export default Link;

export type { LinkTypes };
