import { Button, Input, InputTypes, Title } from '@/shared/ui';

import styles from './styles.module.scss';
interface IProps {
    inputs: {
        name: InputTypes.UseReturnedType;
        password: InputTypes.UseReturnedType;
    };
    handleCreateServer: () => void;
}

const CreateServerView = (props: IProps) => {
    const { inputs, handleCreateServer } = props;

    return (
        <div className={styles.createServerPage}>
            <Title>Создать сервер</Title>
            <div className={styles.params}>
                <Input attrs={{ ...inputs.name.inputAttrs, placeholder: 'SERVER NAME' }} />
                <Input attrs={{ ...inputs.password.inputAttrs, placeholder: 'SERVER PASSWORD' }} />
            </div>
            <div className={styles.map}>map</div>
            <Button
                // disabled={!inputs.name.value}
                style={{ width: '100%' }}
                onClick={handleCreateServer}
            >
                Начать
            </Button>
        </div>
    );
};

export default CreateServerView;
