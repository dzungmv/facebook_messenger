'use client';

import { db } from '@/components/firebase';
import { User } from '@/components/types/auth-public';
import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import ChatInfo from './info';
import MainChat from './main';

interface IProps {
    userId: string;
}

const Chat: React.FC<IProps> = ({ userId }) => {
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

    // console.log('Check user', user);

    return (
        <section className='flex h-full'>
            <div className='flex-1'>
                <MainChat
                    infoSection={infoSection}
                    openInfoSection={() => setInfoSection((prev) => !prev)}
                    userI={user}
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
