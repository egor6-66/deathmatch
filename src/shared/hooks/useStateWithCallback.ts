import { useCallback, useEffect, useRef, useState } from 'react';

function useStateWithCallback<T>(initial: T) {
    const [state, setState] = useState(initial);
    const callbackRef = useRef<((arg: T) => void) | null>(null);

    const updateState = useCallback((newState: T, cb: (arg: T) => void) => {
        callbackRef.current = cb;
        setState((prev) => (typeof newState === 'function' ? newState(prev) : newState));
    }, []);

    useEffect(() => {
        if (callbackRef.current) {
            callbackRef.current(state);
            callbackRef.current = null;
        }
    }, [state]);

    return [state, updateState];
}

export default useStateWithCallback;
