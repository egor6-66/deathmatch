'use client';

import { ReactNode } from 'react';
import { useWindowSizeObserver } from 'react-screen-hooks';

import { paths } from '@/shared/constants';
import { usePageTransition } from '@/shared/hooks';

import transitionStore from '../../_utils/transitionStore';
import { ContentSwitcher } from '../_components';

const animations = { variants: { exit: { opacity: 0 }, animate: { opacity: 1 }, initial: { opacity: 0 } } };

const ServerLayout = ({ children }: { children: ReactNode }) => {
    const { onRoute, Transition } = usePageTransition();
    const { width } = useWindowSizeObserver({ debounceDelay: 1000 });
    const wall = transitionStore.use.wall();

    const goToMain = async () => {
        wall.set({ page: 'MAIN', animations: { variants: { exit: { x: -width }, animate: { x: 0 }, initial: { x: width } } } });
    };

    const transition = (path: paths.ServerPagesTypes) => {
        onRoute({ href: paths.server[path] });
    };

    const items = [
        { id: 0, title: 'МОИ СЕРВЕРА', onClick: () => transition('MY_SERVERS') },
        { id: 1, title: 'СОЗДАТЬ СЕРВЕР', onClick: () => transition('CREATE_SERVER') },
        { id: 2, title: 'ПОИСК СЕРВЕРОВ', onClick: () => transition('FIND_SERVERS') },
        { id: 3, title: 'ВЕРНУТЬСЯ НА ГЛАВНУЮ', onClick: goToMain },
    ] as IMenuItem[];

    return (
        <ContentSwitcher items={items}>
            <Transition transition={{ duration: 0.35 }} {...animations}>
                {children}
            </Transition>
        </ContentSwitcher>
    );
};

export default ServerLayout;
