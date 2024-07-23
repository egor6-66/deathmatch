import React from 'react';

import * as ButtonTypes from './interface';

import styles from './styles.module.scss';

const Button = (props: ButtonTypes.IProps) => {
    const { children, ...rest } = props;

    return (
        <button {...rest} className={styles.button}>
            {children}
        </button>
    );
};

export type { ButtonTypes };

export default Button;
