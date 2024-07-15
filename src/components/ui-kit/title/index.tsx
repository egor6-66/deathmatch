import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';

import { useEffectOnce } from '@/hooks';
import Motion from '@/stores/motion';

import * as TitleProps from './interface';

import styles from './styles.module.scss';

function Title(props: TitleProps.Props) {
    const { children, variant = 'h1', blink } = props;

    const ref = useRef<HTMLDivElement | null>(null);

    useEffectOnce(() => {
        if (blink && ref.current) {
            let aBlinkingString = '';

            const randomArray = Array.from({ length: Math.floor(children.length / 4) }, () => Math.floor(Math.random() * children.length));

            for (let i = 0; i < children.length; i++) {
                const letter = children[i];

                aBlinkingString += randomArray.includes(i) ? `<span>` + letter + '</span>' : letter;
            }

            if ('innerHTML' in ref.current) {
                ref.current.innerHTML = aBlinkingString;
            }

            const selector = document.getElementsByName('blink');
        }
    });

    return (
        <h1 ref={ref} className={classNames(styles.title, styles[variant])}>
            {children}
        </h1>
    );
}

export type { TitleProps };

export default Title;
