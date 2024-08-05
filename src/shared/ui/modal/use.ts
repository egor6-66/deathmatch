import { useCallback, useState } from 'react';

function use<T = any>() {
    const [openModal, setOpenModal] = useState(false);
    const [payload, setPayload] = useState<T | null>(null);

    const open = useCallback((data?: T) => {
        setOpenModal(true);
        // data && setPayload(data);
    }, []);

    const close = useCallback(() => {
        setOpenModal(false);
        setPayload(null);
    }, []);

    return { isOpen: openModal, open, close, payload };
}

export default use;
