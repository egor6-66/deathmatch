import { LinkProps } from 'next/link';

export interface IProps extends LinkProps {
    children: string;
}
