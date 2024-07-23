import React from 'react';

import * as InputTypes from './interface';

import styles from './styles.module.scss';

const Input = (props: InputTypes.IProps) => {
    const { errorMessage, attrs } = props;

    return <input {...attrs} className={styles.input} />;
};

export type { InputTypes };

export default Input;
