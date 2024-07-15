import { HTMLAttributes, MouseEventHandler } from 'react';

export interface Item {
    id: UniqueId;
    title: string;
    path: string;
    onMouseEnter?: () => void;
}

export interface Props extends HTMLAttributes<HTMLMenuElement> {
    items: Item[];
    direction?: 'column' | 'row';
}
