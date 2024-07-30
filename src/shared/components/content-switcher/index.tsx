import { Button } from '@/shared/ui';

import * as ContentSwitcherTypes from './interface';

import styles from './styles.module.scss';

const ContentSwitcher = (props: ContentSwitcherTypes.IProps) => {
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

export type { ContentSwitcherTypes };
export default ContentSwitcher;
