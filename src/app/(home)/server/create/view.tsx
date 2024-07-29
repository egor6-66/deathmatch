import { Button, Input, Title } from '@/shared/ui';

import styles from './styles.module.scss';

const CreateServerView = () => {
    return (
        <div className={styles.createServerPage}>
            <Title>Создать сервер</Title>
            <div className={styles.params}>
                <Input attrs={{ placeholder: 'SERVER NAME' }} />
                <Input attrs={{ placeholder: 'SERVER PASSWORD' }} />
                <Input attrs={{}} />
            </div>
            <div className={styles.map}>map</div>
            <Button style={{ width: '100%' }}>Создать</Button>
        </div>
    );
};

export default CreateServerView;
