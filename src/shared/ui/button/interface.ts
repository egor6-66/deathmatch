import { ButtonHTMLAttributes } from 'react';

export interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: string;
}
