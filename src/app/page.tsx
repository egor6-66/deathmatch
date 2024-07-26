'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Home = () => {
    const { replace } = useRouter();

    useEffect(() => replace('/home/auth/login'), []);

    return null;
};

export default Home;
