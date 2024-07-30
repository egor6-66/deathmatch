'use client';

import React from 'react';
import { useWindowSizeObserver } from 'react-screen-hooks';

import homePagesStore from '../store';

import OptionsView from './view';

const OptionsPage = () => {
    const { width } = useWindowSizeObserver({ debounceDelay: 1000 });
    const animations = homePagesStore.use.animations();
    const page = homePagesStore.use.page();

    const goToMain = () => {
        animations.set({ variants: { exit: { x: width }, animate: { x: 0 }, initial: { x: -width } } });
        page.set('MAIN');
    };

    const menuItems: Array<IMenuItem> = [{ id: 2, title: 'ВЕРНУТЬСЯ НА ГЛАВНУЮ', onClick: goToMain }];

    return <OptionsView menuItems={menuItems} />;
};

export default OptionsPage;
