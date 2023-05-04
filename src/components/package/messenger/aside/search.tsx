'use client';

import { useState } from 'react';

const MessengerSearch = () => {
    const [searchBox, setSearchBox] = useState<boolean>(false);

    const HANDLE = {
        openSearchBox: () => {
            setSearchBox((prev) => !prev);
        },
        closeSearchBox: () => {
            setSearchBox(false);
        },
    };

    return (
        <>
            <div className='w-full relative'>
                <div
                    className='rounded-full bg-slate-100 py-[10px] px-3 text-sm flex items-center gap-1 hover:cursor-text mx-4'
                    onClick={HANDLE.openSearchBox}>
                    <i className='fa-regular fa-magnifying-glass text-base text-gray-500'></i>
                    <span className='text-gray-500'>Search Messenger</span>
                </div>
                {searchBox && (
                    <div className='bg-white absolute top-0 w-full h-[100vh] left-0 right-0 animate-fadeInLeft px-4'>
                        <div className='flex items-center gap-1'>
                            <div
                                className='w-9 h-9 group rounded-full flex items-center justify-center hover:cursor-pointer'
                                onClick={HANDLE.closeSearchBox}>
                                <i className='fa-regular fa-arrow-left text-gray-600 text-lg group-hover:text-gray-700'></i>
                            </div>

                            <input
                                type='text'
                                placeholder='Search Messenger'
                                className='flex-1 bg-slate-100 rounded-full px-3 py-[10px] text-sm outline-none text-gray-500'
                            />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

MessengerSearch.displayName = 'MessengerSearch';
export default MessengerSearch;
