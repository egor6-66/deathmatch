import React from 'react';

import { Button } from '@/shared/ui';

import styles from './styles.module.scss';

interface IProps {
    menuItems: Array<IMenuItem>;
}

const SettingsView = (props: IProps) => {
    const { menuItems } = props;

    return (
        <section className={styles.optionsPage}>
            <div className={styles.menu}>
                {menuItems.map((i) => (
                    <Button key={i.id} onClick={i.onClick}>
                        {i.title}
                    </Button>
                ))}
            </div>
        </section>
    );
};

export default SettingsView;
