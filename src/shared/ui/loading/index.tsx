import React from 'react';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';

import * as LoadingTypes from './interface';

import styles from './styles.module.scss';

const Loading = (props: LoadingTypes.IProps) => {
    const { fullScreen, isVisible, children } = props;

    return (
        <AnimatePresence>
            {isVisible ? (
                <div className={classNames(styles.loading, fullScreen && styles.fullScreen)}>
                    <div className={styles.text}>
                        {children.split('').map((l, i) => (
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { delay: i * (Math.random() * 0.3) } }}
                                exit={{ opacity: 0 }}
                                key={i}
                            >
                                {l}
                            </motion.span>
                        ))}
                    </div>
                </div>
            ) : null}
        </AnimatePresence>
    );
};

export type { LoadingTypes };
export default Loading;
