'use client';

import { useRef } from 'react';

function useFirstMount(): boolean {
    const isFirst = useRef(true);

    if (isFirst.current) {
        isFirst.current = false;

        return true;
    }

    return isFirst.current;
}

export default useFirstMount;
