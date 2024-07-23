'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Home = () => {
    const { replace } = useRouter();

    useEffect(() => replace('/main'), []);

    return null;
};

export default Home;
