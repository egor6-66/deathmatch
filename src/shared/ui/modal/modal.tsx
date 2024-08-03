import { PropsWithChildren, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { useUpdateEffect } from '@/shared/hooks';

import * as ModalTypes from './interface';

import styles from './styles.module.scss';

const Modal = (props: PropsWithChildren<ModalTypes.IProps>) => {
    const { isOpen, close, onClose, children } = props;

    useUpdateEffect(() => {
        if (!isOpen && onClose) {
            onClose();
        }
    }, [isOpen]);

    useEffect(() => {
        const escFunction = (event: any) => {
            if (event.key === 'Escape') {
                close();
            }
        };

        document.addEventListener('keydown', escFunction, false);

        return () => {
            document.removeEventListener('keydown', escFunction, false);
        };
    }, []);

    return (
        <AnimatePresence>
            {isOpen ? (
                <motion.div className={styles.modal} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    {children}
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
};

export default Modal;
