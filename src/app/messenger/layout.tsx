'use client';

import { AuthContext } from '@/components/context/auth-provider';
import MessenserAside from '@/components/package/messenger/aside';
import { redirect } from 'next/navigation';

import { useContext, useEffect } from 'react';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
    props: any;
}) {
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (!user) {
            redirect('/');
        }
    }, [user]);
    return (
        <main className='flex h-screen w-full overflow-hidden'>
            <section className='w-[25%] tablet:w-full tablet:fixed top-0 left-0 right-0 bottom-0 bg-white z-50'>
                <MessenserAside />
            </section>
            <section className='w-[75%] tablet:hidden'>{children}</section>
        </main>
    );
}
