import { ReactNode } from 'react';

import { Button } from '@/shared/ui';

import styles from './styles.module.scss';

interface IProps {
    items: IMenuItem[];
    children: ReactNode;
}

const ContentSwitcher = (props: IProps) => {
    const { items, children } = props;

    return (
        <div className={styles.contentSwitcher}>
            <nav className={styles.nav}>
                {items.map((i) => (
                    <Button key={i.id} onClick={i.onClick}>
                        {i.title}
                    </Button>
                ))}
            </nav>
            <div className={styles.border}></div>
            <div className={styles.children}>{children}</div>
        </div>
    );
};

export default ContentSwitcher;
