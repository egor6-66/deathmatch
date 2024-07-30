import { ReactNode } from 'react';

export interface IItems {
    id: number;
    element: ReactNode;
}

export interface IProps {
    items: IItems[];
    children: ReactNode;
}
