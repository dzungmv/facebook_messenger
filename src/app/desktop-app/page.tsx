import DesktopAppSC from '@/components/package/desktop-app';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Desktop app',
};

export default function Page() {
    return <DesktopAppSC />;
}
