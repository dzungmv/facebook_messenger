import ChatGPT from '@/components/package/messenger/chat-gpt';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Chat GPT',
    description: 'Chat GPT',
};

export default function Page() {
    return <ChatGPT />;
}
