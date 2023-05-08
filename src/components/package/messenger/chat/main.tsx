'use client';

import { Avatar } from '@/components/common/image';
import { AuthContext } from '@/components/context/auth-provider';
import { db } from '@/components/firebase';
import { User } from '@/components/types/auth-public';
import { doc, onSnapshot } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import MessengerInput from './input';
import Message from './message';

type IMainChatProps = {
    infoSection: boolean;
    openInfoSection: (state: boolean) => void | undefined;
    userI: User;
    closeChat?: () => void;
};

const MainChat: React.FC<IMainChatProps> = ({
    infoSection,
    openInfoSection,
    userI,
    closeChat,
}) => {
    const [messages, setMessages] = useState<any[]>([]);

    const { user } = useContext(AuthContext);

    const chatId =
        user &&
        (user?.uid > userI.uid ? user?.uid + userI.uid : userI.uid + user?.uid);

    useEffect(() => {
        const unsub = onSnapshot(doc(db, 'chats', chatId as string), (doc) => {
            doc.exists() && setMessages(doc.data()?.messages);
        });

        return () => unsub();
    }, [chatId]);

    return (
        <section className='relative w-full h-full'>
            <header className='p-1 border border-b flex items-center justify-between absolute top-0 right-0 left-0 bg-[rgba(255,255,255,.98)]'>
                <div className='flex items-center gap-2 p-2 rounded-lg hover:cursor-pointer'>
                    <div
                        className='w-10 h-10 items-center justify-center hidden tablet:flex'
                        onClick={() => {
                            closeChat && closeChat();
                        }}>
                        <i className='fa-solid fa-arrow-left text-xl text-gray-500'></i>
                    </div>
                    <figure className='w-10 h-10 rounded-full relative'>
                        <Avatar
                            src={userI?.photoURL}
                            style='w-full h-full  rounded-full object-cover'
                        />

                        <div className='w-2 h-2 rounded-full absolute bottom-0 bg-green-500 right-1'></div>
                    </figure>
                    <div>
                        <p className='text-sm font-medium'>
                            {userI?.displayName}
                        </p>
                        <p className='text-xs text-gray-500'>Active now</p>
                    </div>
                </div>

                <div className='flex items-center gap-2'>
                    <div className='w-9 h-9 hover:bg-slate-200 rounded-full flex justify-center items-center hover:cursor-pointer'>
                        <i className='fa-solid fa-phone text-lg text-gray-500'></i>
                    </div>
                    <div className='w-9 h-9 hover:bg-slate-200 rounded-full flex justify-center items-center hover:cursor-pointer'>
                        <i className='fa-solid fa-video text-lg text-gray-500'></i>
                    </div>
                    <div
                        className='w-9 h-9 hover:bg-slate-200 rounded-full flex justify-center items-center hover:cursor-pointer'
                        style={{
                            backgroundColor: infoSection ? '#f3f4f6' : '',
                        }}
                        onClick={() => openInfoSection(true)}>
                        <i className='fa-solid fa-ellipsis text-lg text-primary'></i>
                    </div>
                </div>
            </header>

            <div className='py-[72px] px-4 flex flex-col gap-3 overflow-y-auto h-full'>
                {messages.map((item) => {
                    return (
                        <Message messages={item} userI={userI} key={item.id} />
                    );
                })}
            </div>

            <MessengerInput userI={userI} />
        </section>
    );
};

MainChat.displayName = 'MainChat';
export default MainChat;
