import { default as NextLink } from 'next/link';

import * as LinkTypes from './interface';

import styles from './styles.module.scss';

function Link(props: LinkTypes.Props) {
    const { children, ...rest } = props;

    return (
        <NextLink {...rest} className={styles.link}>
            {children}
        </NextLink>
    );
}

export default Link;

export type { LinkTypes };
