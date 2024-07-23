import { HTMLAttributes } from 'react';

export interface IItem {
    id: UniqueId;
    title: string;
    path: string;
    onMouseEnter?: () => void;
}

export interface IProps extends HTMLAttributes<HTMLMenuElement> {
    items: IItem[];
    direction?: 'column' | 'row';
}
