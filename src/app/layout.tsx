import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';

import { ApolloProvider, SubscriptionsProvider } from '@/providers';

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

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <html lang="en" data-theme={'blood'}>
            <body className={ns.className} suppressHydrationWarning>
                <ApolloProvider>
                    <SubscriptionsProvider>{children}</SubscriptionsProvider>
                </ApolloProvider>
            </body>
        </html>
    );
};

export default RootLayout;
