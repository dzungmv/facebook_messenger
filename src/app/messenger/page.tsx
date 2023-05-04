import ImageC from '@/components/common/image';
import { Metadata } from 'next';
import { chat_icon } from '../../../public';

export const metadata: Metadata = {
    title: 'Messenger',
};

export default function Page() {
    return (
        <section className='w-full h-full flex items-center justify-center flex-col gap-4'>
            <figure className='w-[320px]'>
                <ImageC src={chat_icon} />
            </figure>
            <h2 className='text-2xl font-semibold bg-messenger bg-clip-text text-transparent'>
                No chat selected
            </h2>
        </section>
    );
}
