import { ReactNode, useCallback } from 'react';
import { useWindowSizeObserver } from 'react-screen-hooks';

import { paths } from '@/shared/constants';

import coords from './coords';
import homeStore from './store';

export type Pages = keyof typeof paths.home;

interface IProps {
    children: ReactNode;
    from: Pages;
    to: Pages;
}

const SetCoords = (props: IProps) => {
    const { children, from, to } = props;
    const canvasCoords = homeStore.use.canvasCoords();
    const homeAnimations = homeStore.use.homeAnimations();
    const { width, height } = useWindowSizeObserver({ debounceDelay: 1000 });

    const updateCoords = useCallback(() => {
        canvasCoords.set(coords[to]);

        const initial = { x: 0, y: 0 };
        const animate = { x: 0, y: 0 };
        const exit = { x: 0, y: 0 };

        if ((from === 'OPTIONS' && to === 'MAIN') || (from === 'MAIN' && to === 'SERVER') || (from === 'LOGIN' && to === 'REGISTRATION')) {
            exit.x = width;
            initial.x = -width;
        }

        if ((from === 'MAIN' && to === 'OPTIONS') || (from === 'SERVER' && to === 'MAIN') || (from === 'REGISTRATION' && to === 'LOGIN')) {
            exit.x = -width;
            initial.x = width;
        }

        if (from === 'LOGIN' && to === 'MAIN') {
            exit.x = width;
            exit.y = height;
            initial.x = -width;
            initial.y = -height;
        }

        if (from === 'MAIN' && to === 'LOGIN') {
            exit.x = -width;
            exit.y = -height;
            initial.x = width;
            initial.y = height;
        }

        if (from === 'REGISTRATION' && to === 'MAIN') {
            exit.x = -width;
            exit.y = height;
            initial.y = -height;
            initial.x = width;
        }

        if (from === 'MAIN' && to === 'REGISTRATION') {
            exit.x = width;
            exit.y = -height;
            initial.x = -width;
            initial.y = height;
        }

        homeAnimations.set({ initial, animate, exit });
    }, []);

    return <div onMouseEnter={updateCoords}>{children}</div>;
};

export default SetCoords;
