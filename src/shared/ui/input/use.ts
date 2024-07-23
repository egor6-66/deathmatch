import { ChangeEvent, useEffect, useState } from 'react';

import { IUseProps } from './interface';

function use(props: IUseProps) {
    const [state, setState] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { cut, validator } = props;

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;

        if (cut) {
            value = value.replace(cut, '');
        }

        if (validator) {
            if (validator.regex.test(value)) {
                setErrorMessage(validator.errorMessage);
            } else {
                setErrorMessage('');
            }
        }

        setState(value);
    };

    return {
        value: state,
        errorMessage,
        isError: !!errorMessage,
        inputAttrs: {
            value: state,
            onChange,
        },
    };
}

export default use;
