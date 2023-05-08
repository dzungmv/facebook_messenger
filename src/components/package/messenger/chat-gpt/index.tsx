'use client';
import { useState } from 'react';

import { Avatar } from '@/components/common/image';
import { chat_gpt } from '../../../../../public';
import axios from 'axios';
import { async } from '@firebase/util';

const ChatGPT: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const [chats, setChats] = useState<any[]>([]);

    const HANDLE = {
        submit: async () => {
            setChats((prev) => [
                ...prev,
                {
                    type: 'user',
                    message: inputValue,
                },
            ]);

            await HANDLE.sendMessage(inputValue);

            setInputValue('');
        },

        sendMessage: async (message: string) => {
            const url = 'https://api.openai.com/v1/chat/completions';
            const token = process.env.GPT_API;
            const headers = {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            };

            const data = {
                model: 'gpt-3.5-turbo-0301',
                messages: [
                    {
                        role: 'user',
                        content: message,
                    },
                ],
            };

            setLoading(true);

            await axios
                .post(url, data, { headers: headers })
                .then((res) => {
                    console.log(res);
                    setChats((prev) => [
                        ...prev,
                        {
                            type: 'bot',
                            message: res.data.choices[0].message.content,
                        },
                    ]);
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false);
                });
        },
        keyDown: (e: React.KeyboardEvent<HTMLInputElement>) => {
            e.key === 'Enter' && HANDLE.submit();
        },
    };

    console.log(chats);

    return (
        <section className='relative w-full h-full'>
            <header className='p-1 border border-b flex items-center justify-between absolute top-0 right-0 left-0 bg-[rgba(255,255,255,.98)]'>
                <div className='flex items-center gap-2 p-2 rounded-lg hover:cursor-pointer'>
                    <div className='w-10 h-10 items-center justify-center hidden tablet:flex'>
                        <i className='fa-solid fa-arrow-left text-xl text-gray-500'></i>
                    </div>
                    <figure className='w-10 h-10 rounded-full relative'>
                        <Avatar
                            src={chat_gpt}
                            style='w-full h-full  rounded-full object-cover'
                        />

                        <div className='w-2 h-2 rounded-full absolute bottom-0 bg-green-500 right-1'></div>
                    </figure>
                    <div>
                        <p className='text-sm font-medium'>Chat GPT</p>
                        <p className='text-xs text-gray-500'>Active now</p>
                    </div>
                </div>
            </header>

            {/* <div className='py-[72px] px-4 flex flex-col gap-3 overflow-y-auto h-full'>
                {messages.map((item) => {
                    return (
                        <Message messages={item} userI={userI} key={item.id} />
                    );
                })}
            </div> */}

            <footer className=' absolute bottom-0 left-0 right-0 py-2 px-2 flex items-center gap-1 bg-[rgba(255,255,255,.98)]'>
                <div className='flex-1'>
                    <input
                        onKeyDown={HANDLE.keyDown}
                        type='text'
                        className='w-full rounded-full bg-gray-100 text-sm py-2 px-3 outline-none flex-1'
                        placeholder='Aa'
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </div>

                <div
                    className='w-9 h-9 rounded-full flex items-center justify-center hover:bg-slate-200 hover:cursor-pointer'
                    onClick={HANDLE.submit}>
                    <i
                        className='fa-solid fa-paper-plane-top text-xl text-primary'
                        style={{
                            color: inputValue ? '#3b82f6' : '#ccc',
                        }}></i>
                </div>
            </footer>
        </section>
    );
};

ChatGPT.displayName = 'ChatGPT';
export default ChatGPT;
