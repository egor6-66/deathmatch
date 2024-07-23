import { HTMLAttributes } from 'react';

export interface IProps extends HTMLAttributes<HTMLButtonElement> {
    children: string;
}
