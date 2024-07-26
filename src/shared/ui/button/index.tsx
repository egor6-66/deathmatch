import React from 'react';
import classNames from 'classnames';

import * as ButtonTypes from './interface';

import styles from './styles.module.scss';

const Button = (props: ButtonTypes.IProps) => {
    const { children, disabled, ...rest } = props;

    return (
        <button disabled={disabled} {...rest} className={classNames(styles.button, disabled ? styles.disabled : '')}>
            {children}
        </button>
    );
};

export type { ButtonTypes };

export default Button;
