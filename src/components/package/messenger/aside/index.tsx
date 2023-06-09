'use client';

import ImageC, { Avatar } from '@/components/common/image';
import { AuthContext } from '@/components/context/auth-provider';
import { db } from '@/components/firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { chat_gpt } from '../../../../../public';
import Chat from '../chat';
import MessengerSearch from './search';

const MessenserAside = () => {
    const { user, signOut } = useContext(AuthContext);

    const [userChatsId, setUserChatsId] = useState(null);

    const [userChats, setUserChats] = useState([]);

    const HANDLE = {
        signout: () => {
            signOut();
        },
    };

    useEffect(() => {
        const getChats = async () => {
            const unsub = await onSnapshot(
                doc(db, 'user-chats', user!.uid),
                (doc) => {
                    setUserChats(doc.data() as any);
                }
            );

            return () => {
                unsub();
            };
        };

        user && getChats();
    }, [user]);

    return (
        <>
            {userChatsId && (
                <Chat
                    userId={userChatsId}
                    closeChat={() => setUserChatsId(null)}
                />
            )}
            <aside className='w-full h-full border border-r-[1px] relative'>
                <header className='absolute top-0 left-0 right-0 bg-white'>
                    <div className='flex items-center justify-between p-4'>
                        <h1 className='font-semibold text-2xl'>Chats</h1>
                        <div className='flex gap-2 items-center'>
                            <div className=' w-9 h-9 flex items-center justify-center bg-gray-100 rounded-full hover:cursor-pointer hover:bg-gray-200'>
                                <i className='fa-solid fa-video'></i>
                            </div>
                            <div className=' w-9 h-9 flex items-center justify-center bg-gray-100 rounded-full hover:cursor-pointer hover:bg-gray-200'>
                                <i className='fa-solid fa-pen-to-square'></i>
                            </div>
                        </div>
                    </div>
                    <MessengerSearch />
                </header>

                <div className='pt-[125px] w-full overflow-x-hidden px-2 overflow-y-auto h-full hidden tablet:block'>
                    <Link
                        href='/messenger/chat-gpt'
                        className='flex items-center gap-2 rounded-xl hover:bg-slate-100 hover:cursor-pointer p-2 overflow-x-hidden w-full'>
                        <div className='w-10 h-10 rounded-full'>
                            <Avatar
                                src={chat_gpt}
                                style='w-full h-full rounded-full object-cover'
                            />
                        </div>

                        <div className='flex-1'>
                            <h2 className='font-medium text-sm'>
                                Chat with AI
                            </h2>

                            <div className='flex items-center gap-1'>
                                <p className='text-xs text-gray-500 whitespace-nowrap text-ellipsis overflow-x-hidden max-w-[100px] block'></p>

                                <span className='text-xs text-gray-500'>·</span>
                            </div>
                        </div>
                    </Link>
                    {userChats &&
                        Object.entries(userChats)?.map(
                            (item: any, index: number) => {
                                return (
                                    <div
                                        onClick={() => {
                                            setUserChatsId(
                                                item[1].userInfo.uid
                                            );
                                        }}
                                        key={item[0]}
                                        className='flex items-center gap-2 rounded-xl hover:bg-slate-100 hover:cursor-pointer p-2 overflow-x-hidden w-full'>
                                        <div className='w-10 h-10 rounded-full'>
                                            <Avatar
                                                src={item[1].userInfo.photoURL}
                                                style='w-full h-full rounded-full object-cover'
                                            />
                                        </div>

                                        <div className='flex-1'>
                                            <h2 className='font-medium text-sm'>
                                                {item[1].userInfo.displayName}
                                            </h2>
                                            {item[1].lastMessage?.message && (
                                                <div className='flex items-center gap-1'>
                                                    <p className='text-xs text-gray-500 whitespace-nowrap text-ellipsis overflow-x-hidden max-w-[100px] block'>
                                                        {
                                                            item[1].lastMessage
                                                                ?.message
                                                        }
                                                    </p>

                                                    <span className='text-xs text-gray-500'>
                                                        ·
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            }
                        )}
                </div>

                <div className='pt-[125px] w-full overflow-x-hidden px-2 overflow-y-auto h-full tablet:hidden'>
                    <Link
                        href='/messenger/chat-gpt'
                        className='flex items-center gap-2 rounded-xl hover:bg-slate-100 hover:cursor-pointer p-2 overflow-x-hidden w-full'>
                        <div className='w-10 h-10 rounded-full'>
                            <Avatar
                                src={chat_gpt}
                                style='w-full h-full rounded-full object-cover'
                            />
                        </div>

                        <div className='flex-1'>
                            <h2 className='font-medium text-sm relative inline-block'>
                                Chat with AI
                                <span className=' absolute -top-2 right text-[10px] text-primary'>
                                    Beta
                                </span>
                            </h2>
                        </div>
                    </Link>
                    {userChats &&
                        Object.entries(userChats)?.map(
                            (item: any, index: number) => {
                                return (
                                    <Link
                                        href={`/messenger/${item[1].userInfo.uid}`}
                                        key={item[0]}
                                        className='flex items-center gap-2 rounded-xl hover:bg-slate-100 hover:cursor-pointer p-2 overflow-x-hidden w-full'>
                                        <div className='w-10 h-10 rounded-full'>
                                            <Avatar
                                                src={item[1].userInfo.photoURL}
                                                style='w-full h-full rounded-full object-cover'
                                            />
                                        </div>

                                        <div className='flex-1'>
                                            <h2 className='font-medium text-sm'>
                                                {item[1].userInfo.displayName}
                                            </h2>
                                            {item[1].lastMessage?.message && (
                                                <div className='flex items-center gap-1'>
                                                    <p className='text-xs text-gray-500 whitespace-nowrap text-ellipsis overflow-x-hidden max-w-[100px] block'>
                                                        {
                                                            item[1].lastMessage
                                                                ?.message
                                                        }
                                                    </p>

                                                    <span className='text-xs text-gray-500'>
                                                        ·
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </Link>
                                );
                            }
                        )}
                </div>

                <footer className='absolute bottom-0 left-0 right-0 bg-white flex items-center justify-between p-2 border border-t-[1px] px-4'>
                    <div className='flex items-center gap-2'>
                        <figure className='w-10 h-10 rounded-full'>
                            <Avatar
                                src={user?.photoURL}
                                alt='avatar'
                                style='rounded-full w-full h-full object-cover'
                            />
                        </figure>
                        <p className='text-sm font-medium'>
                            {user?.displayName}
                        </p>
                    </div>

                    <div
                        className='w-10 h-10 flex items-center justify-center group hover:cursor-pointer'
                        onClick={HANDLE.signout}>
                        <i className='fa-regular fa-right-from-bracket text-lg group-hover:opacity-[0.3]'></i>
                    </div>
                </footer>
            </aside>
        </>
    );
};

MessenserAside.displayName = 'MessenserAside';
export default MessenserAside;
