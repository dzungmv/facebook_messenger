import MessenserAside from '@/components/package/messenger/aside';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className='flex h-screen w-full overflow-hidden '>
            <section className='w-[25%]'>
                <MessenserAside />
            </section>
            <section className='w-[75%]'>{children}</section>
        </main>
    );
}
