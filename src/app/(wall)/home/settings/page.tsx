'use client';

import React from 'react';
import { useWindowSizeObserver } from 'react-screen-hooks';

import { transitionStore } from '@/shared/stores';

import OptionsView from './view';

const OptionsPage = () => {
    const { width } = useWindowSizeObserver({ debounceDelay: 1000 });
    const wall = transitionStore.use.wall();

    const goToMain = () => {
        wall.set({
            page: 'MAIN',
            animations: { variants: { exit: { x: width }, animate: { x: 0 }, initial: { x: -width } } },
        });
    };

    const menuItems: Array<IMenuItem> = [{ id: 2, title: 'ВЕРНУТЬСЯ НА ГЛАВНУЮ', onClick: goToMain }];

    return <OptionsView menuItems={menuItems} />;
};

export default OptionsPage;
