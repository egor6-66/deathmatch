import { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
    children: string;
}
