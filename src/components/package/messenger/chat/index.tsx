'use client';

import { useState } from 'react';
import ChatInfo from './info';
import MainChat from './main';

const Chat: React.FC = () => {
    const [infoSection, setInfoSection] = useState<boolean>(false);
    return (
        <section className='flex h-full'>
            <div className='flex-1'>
                <MainChat
                    openInfoSection={() => setInfoSection((prev) => !prev)}
                />
            </div>
            {infoSection && (
                <div className='w-[30%] border border-l'>
                    <ChatInfo />
                </div>
            )}
        </section>
    );
};

Chat.displayName = 'Chat';
export default Chat;
