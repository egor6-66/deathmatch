import React, { FC } from 'react';

import { Button, Modal, ModalTypes } from '@/shared/ui';

import styles from './styles.module.scss';

interface IPayload {
    errorMessage: string;
}

const UniqueServerModal: FC<ModalTypes.IProps<IPayload>> = (props) => {
    const { payload, ...rest } = props;

    return (
        <Modal {...rest}>
            <div className={styles.uniqueServerModal}>{payload?.errorMessage}</div>
            <Button onClick={rest.close}>close</Button>
        </Modal>
    );
};

export default UniqueServerModal;
