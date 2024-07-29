import React from 'react';

import * as InputTypes from './interface';

import styles from './styles.module.scss';

const Input = (props: InputTypes.IProps) => {
    const { errorMessage, attrs } = props;

    return (
        <div className={styles.input}>
            <input {...attrs} />
            {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        </div>
    );
};

export type { InputTypes };

export default Input;
