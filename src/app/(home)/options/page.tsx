'use client';

import React from 'react';
import { motion } from 'framer-motion';

import MainView from '@/app/(home)/main/view';

import OptionsView from './view';

const OptionsPage = () => {
    return (
        <motion.div key={'w22dawddw'} initial={{ x: 2000 }} animate={{ x: 0 }} exit={{ x: -2000 }} transition={{ type: 'linear', duration: 2 }}>
            <OptionsView />;
        </motion.div>
    );
};

export default OptionsPage;
