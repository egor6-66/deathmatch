import { ReactNode, useCallback } from 'react';
import { useWindowSizeObserver } from 'react-screen-hooks';

import { homeStore } from '@/app/home/utils/index';
import { paths } from '@/shared/constants';

import coords from './coords';

export type Pages = keyof typeof paths.main | keyof typeof paths.auth;

interface IProps {
    children: ReactNode;
    from: Pages;
    to: Pages;
}

const SetCoords = (props: IProps) => {
    const { children, from, to } = props;
    const canvasCoords = homeStore.use.canvasCoords();
    const pageCoords = homeStore.use.pageCoords();
    const { width, height } = useWindowSizeObserver({ debounceDelay: 1000 });

    const updateCoords = useCallback(() => {
        canvasCoords.set(coords[to]);

        const getPageCoords = () => {
            const initial = { x: 0, y: 0 };
            const exit = { x: 0, y: 0 };

            if ((from === 'OPTIONS' && to === 'MENU') || (from === 'MENU' && to === 'SERVER') || (from === 'LOGIN' && to === 'REGISTRATION')) {
                exit.x = width;
                initial.x = -width;
            }

            if ((from === 'MENU' && to === 'OPTIONS') || (from === 'SERVER' && to === 'MENU') || (from === 'REGISTRATION' && to === 'LOGIN')) {
                exit.x = -width;
                initial.x = width;
            }

            if (from === 'LOGIN' && to === 'MENU') {
                exit.x = width;
                exit.y = height;
                initial.x = -width;
                initial.y = -height;
            }

            if (from === 'MENU' && to === 'LOGIN') {
                exit.x = -width;
                exit.y = -height;
                initial.x = width;
                initial.y = height;
            }

            if (from === 'REGISTRATION' && to === 'MENU') {
                exit.x = -width;
                exit.y = height;
                initial.y = -height;
                initial.x = width;
            }

            if (from === 'MENU' && to === 'REGISTRATION') {
                exit.x = width;
                exit.y = -height;
                initial.x = -width;
                initial.y = height;
            }

            return { initial, exit };
        };

        pageCoords.set(getPageCoords());
    }, []);

    return <div onMouseEnter={updateCoords}>{children}</div>;
};

export default SetCoords;
