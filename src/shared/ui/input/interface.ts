import { InputHTMLAttributes } from 'react';

import use from './use';

export type UseReturnedType = ReturnType<typeof use>;

export interface IProps {
    attrs: InputHTMLAttributes<HTMLInputElement>;
    errorMessage?: string;
}

export interface IUseProps {
    cut?: RegExp;
    validator?: {
        regex: RegExp;
        errorMessage: string;
    };
}
