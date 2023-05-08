'use client';

import { Avatar } from '@/components/common/image';
import { User } from '@/components/types/auth-public';
import { useState } from 'react';

type IProps = {
    userI: User;
    openInfoSection: (state: boolean) => void;
};
const ChatInfo: React.FC<IProps> = ({ userI, openInfoSection }) => {
    const [mflSection, setMflSection] = useState<boolean>(false);

    return (
        <section className='px-2  animate-fadeInRight'>
            <div
                className='w-10 h-10 items-center justify-center hidden tablet:flex mt-3'
                onClick={() => openInfoSection(false)}>
                <i className='fa-solid fa-arrow-left text-xl text-gray-500'></i>
            </div>
            <header className='pt-5 flex flex-col justify-center items-center gap-2'>
                <figure className='w-16 h-16 rounded-full '>
                    <Avatar
                        src={userI?.photoURL}
                        style='w-full h-full rounded-full object-cover'
                    />
                </figure>
                <div className='w-full text-center'>
                    <h2 className='text-sm font-semibold'>
                        {userI?.displayName}
                    </h2>
                    <p className='text-xs text-gray-500'>Active now</p>
                </div>
            </header>

            <div className='mt-7 flex justify-center gap-8 items-center'>
                <div className='flex flex-col gap-1 justify-center items-center'>
                    <div className='w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 hover:cursor-pointer flex items-center justify-center'>
                        <i className='fa-solid fa-user'></i>
                    </div>
                    <p className='text-xs'>Profile</p>
                </div>
                <div className='flex flex-col gap-1 justify-center items-center'>
                    <div className='w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 hover:cursor-pointer flex items-center justify-center'>
                        <i className='fa-solid fa-bell'></i>
                    </div>
                    <p className='text-xs'>Mute</p>
                </div>

                <div className='flex flex-col gap-1 justify-center items-center'>
                    <div className='w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 hover:cursor-pointer flex items-center justify-center'>
                        <i className='fa-solid fa-search'></i>
                    </div>
                    <p className='text-xs'>Search</p>
                </div>
            </div>

            <div className='mt-7'>
                <div
                    className='p-2 hover:bg-slate-100 rounded-lg hover:cursor-pointer flex items-center justify-between py-3'
                    onClick={() => setMflSection((prev) => !prev)}>
                    <p className='text-sm font-medium'>Media, files and link</p>
                    <i className='fa-solid fa-chevron-right'></i>
                </div>
                {mflSection && (
                    <div>
                        <div className='p-2 hover:bg-slate-100 rounded-lg hover:cursor-pointer flex items-center gap-2 py-2  animate-fadeInTop'>
                            <div className='w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center'>
                                <i className='fa-solid fa-photo-film-music text-[#ff007f]'></i>
                            </div>
                            <p className='text-sm font-medium'>Media</p>
                        </div>
                        <div className='p-2 hover:bg-slate-100 rounded-lg hover:cursor-pointer flex items-center gap-2 py-2  animate-fadeInTop'>
                            <div className='w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center'>
                                <i className='fa-solid fa-file-lines text-[#610bd9]'></i>
                            </div>
                            <p className='text-sm font-medium'>Files</p>
                        </div>

                        <div className='p-2 hover:bg-slate-100 rounded-lg hover:cursor-pointer flex items-center gap-2 py-2  animate-fadeInTop'>
                            <div className='w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center'>
                                <i className='fa-solid fa-link text-[#00b0ff]'></i>
                            </div>
                            <p className='text-sm font-medium'>Link</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

ChatInfo.displayName = 'ChatInfo';
export default ChatInfo;
