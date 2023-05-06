'use client';

import ImageC from '@/components/common/image';
import { AuthContext } from '@/components/context/auth-provider';
import Link from 'next/link';
import { useContext } from 'react';
import MessengerSearch from './search';

const MessenserAside = () => {
    const { user, signOut } = useContext(AuthContext);

    const HANDLE = {
        signout: () => {
            signOut();
        },
    };
    return (
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

            <div className='pt-[125px] w-full overflow-x-hidden px-2 overflow-y-auto h-full'>
                {Array.from(Array(1).keys()).map((item, index: number) => {
                    return (
                        <Link
                            href='/messenger/1'
                            key={index}
                            className='flex items-center gap-2 rounded-xl hover:bg-slate-100 hover:cursor-pointer p-2 overflow-x-hidden w-full'>
                            <div className='w-10 h-10 bg-messenger rounded-full'></div>

                            <div className='flex-1'>
                                <h2 className='font-medium text-sm'>
                                    Nguyen Van A
                                </h2>
                                <div className='flex items-center gap-1'>
                                    <p className='text-xs text-gray-500 whitespace-nowrap text-ellipsis overflow-x-hidden max-w-[100px] block'>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Quisquam,
                                    </p>
                                    <span className='text-xs text-gray-500'>
                                        ·
                                    </span>
                                    <p className='text-xs text-gray-500'>10m</p>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>

            <footer className='absolute bottom-0 left-0 right-0 bg-white flex items-center justify-between p-2 border border-t-[1px] px-4'>
                <div className='flex items-center gap-2'>
                    <figure className='w-10 h-10 rounded-full'>
                        <ImageC
                            src={user?.photoURL}
                            alt='avatar'
                            style='rounded-full w-full h-full object-cover'
                        />
                    </figure>
                    <p className='text-sm font-medium'>{user?.displayName}</p>
                </div>

                <div
                    className='w-10 h-10 flex items-center justify-center group hover:cursor-pointer'
                    onClick={HANDLE.signout}>
                    <i className='fa-regular fa-right-from-bracket text-lg group-hover:opacity-[0.3]'></i>
                </div>
            </footer>
        </aside>
    );
};

MessenserAside.displayName = 'MessenserAside';
export default MessenserAside;
