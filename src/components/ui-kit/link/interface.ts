import { LinkProps } from 'next/link';

export interface Props extends LinkProps {
    children: string;
}
