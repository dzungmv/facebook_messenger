import Chat from '@/components/package/messenger/chat';
import type { Metadata } from 'next';

interface IParamProps {
    params: {
        messID: string;
    };
}

export const metadata: Metadata = {
    title: 'Messenger',
    icons: './icon.png',
};

export default function Page({ params }: IParamProps) {
    return <Chat />;
}
