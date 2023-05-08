'use client';

import { db } from '@/components/firebase';
import { User } from '@/components/types/auth-public';
import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import ChatInfo from './info';
import MainChat from './main';

interface IProps {
    userId: string;
    closeChat?: () => void;
}

const Chat: React.FC<IProps> = ({ userId, closeChat }) => {
    const [infoSection, setInfoSection] = useState<boolean>(false);

    const [user, setUser] = useState<User>({} as User);

    useEffect(() => {
        const getUser = async () => {
            const unsub = await onSnapshot(doc(db, 'users', userId), (doc) => {
                setUser(doc.data() as User);
            });

            return () => unsub();
        };

        userId && getUser();
    }, [userId]);

    return (
        <section className='flex h-full'>
            <div className='flex-1'>
                <MainChat
                    infoSection={infoSection}
                    openInfoSection={() => setInfoSection((prev) => !prev)}
                    userI={user}
                    closeChat={closeChat}
                />
            </div>
            {infoSection && (
                <div className='w-[30%] border border-l tablet:w-full tablet:fixed top-0 right-0 bottom-0 left-0 bg-white'>
                    <ChatInfo
                        userI={user}
                        openInfoSection={() => setInfoSection((prev) => !prev)}
                    />
                </div>
            )}
        </section>
    );
};

Chat.displayName = 'Chat';
export default Chat;
