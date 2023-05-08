'use client';

import ImageC, { Avatar } from '@/components/common/image';
import { AuthContext } from '@/components/context/auth-provider';
import { User } from '@/components/types/auth-public';
import { useContext, useEffect, useRef } from 'react';

interface MessageProps {
    messages: any;
    userI: User;
}

const Message: React.FC<MessageProps> = ({ messages, userI }) => {
    const { user } = useContext(AuthContext);

    const messRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);
    return (
        <div
            style={{
                display: 'flex',
                justifyContent:
                    messages.senderId === user?.uid ? 'flex-end' : 'flex-start',
            }}>
            <div
                ref={messRef}
                className='flex items-start gap-2'
                style={{
                    maxWidth: '70%',
                    flexDirection:
                        messages.senderId === user?.uid ? 'row-reverse' : 'row',
                }}>
                {messages.senderId !== user?.uid && (
                    <figure className='w-10 h-10 rounded-full'>
                        <Avatar
                            src={userI?.photoURL}
                            style='w-full h-full rounded-full object-cover'
                        />
                    </figure>
                )}

                <div className=''>
                    {messages.message && (
                        <p
                            className='p-2 px-3 bg-primary text-white text-sm'
                            style={{
                                backgroundColor:
                                    messages.senderId === user?.uid
                                        ? '#3b82f6'
                                        : '#f3f4f6',
                                color:
                                    messages.senderId === user?.uid
                                        ? '#fff'
                                        : '#000',
                                borderRadius:
                                    messages.senderId === user?.uid
                                        ? '10px 0 10px 10px'
                                        : '0 10px 10px 10px',
                            }}>
                            {messages?.message}
                        </p>
                    )}
                    {messages?.media && (
                        <figure className='max-w-[250px]'>
                            <ImageC
                                src={messages?.media}
                                style='w-full h-full object-contain'
                            />
                        </figure>
                    )}
                </div>
            </div>
        </div>
    );
};

Message.displayName = 'Message';
export default Message;
