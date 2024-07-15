import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';

import { QueryClientProvider } from '@/providers';

import '@/css/index.css';

export const metadata: Metadata = {
    title: 'Deathmatch',
    description: 'action game from javascript',
};

const ns = Noto_Sans({
    subsets: ['cyrillic', 'latin'],
    weight: ['300', '400', '500', '600', '700', '900'],
    display: 'swap',
    variable: '--ns',
    style: ['normal'],
});

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en" data-theme={'blood'}>
            <body className={ns.className}>
                <QueryClientProvider>{children}</QueryClientProvider>
            </body>
        </html>
    );
}
