'use client';

import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { AuthContext } from '@/components/context/auth-provider';
import { useContext, useState } from 'react';

import { db, storage } from '@/components/firebase';
import {
    arrayUnion,
    doc,
    serverTimestamp,
    Timestamp,
    updateDoc,
} from 'firebase/firestore';
import { User } from '@/components/types/auth-public';

type IProps = {
    userI: User;
};

const { v4 } = require('uuid');

const MessengerInput: React.FC<IProps> = ({ userI }) => {
    const [message, setMessage] = useState<string>('');
    const [media, setMedia] = useState<any>();

    const { user } = useContext(AuthContext);
    const userId = userI.uid;

    const chatId =
        user && (user?.uid > userId ? user?.uid + userId : userId + user?.uid);

    const HANDLE = {
        sendMessage: async () => {
            if (media) {
                const storageRef = ref(storage, v4());

                const uploadTask = uploadBytesResumable(storageRef, media);

                uploadTask.on('state_changed', () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(
                        async (downloadURL) => {
                            await updateDoc(
                                doc(db, 'chats', chatId as string),
                                {
                                    messages: arrayUnion({
                                        id: v4(),
                                        message,
                                        senderId: user!.uid,
                                        date: Timestamp.now(),
                                        img: downloadURL,
                                    }),
                                }
                            );
                        }
                    );
                });
            } else {
                await updateDoc(doc(db, 'chats', chatId as string), {
                    messages: arrayUnion({
                        id: v4(),
                        message,
                        senderId: user!.uid,
                        date: Timestamp.now(),
                    }),
                });
            }

            await updateDoc(doc(db, 'user-chats', user!.uid), {
                [chatId + '.lastMessage']: {
                    message,
                },
                [chatId + '.date']: serverTimestamp(),
            });

            await updateDoc(doc(db, 'user-chats', userId), {
                [chatId + '.lastMessage']: {
                    message,
                },
                [chatId + '.date']: serverTimestamp(),
            });

            setMessage('');
            setMedia(null);
        },
        keyDown: (e: React.KeyboardEvent<HTMLInputElement>) => {
            e.key === 'Enter' && HANDLE.sendMessage();
        },
    };

    return (
        <footer className=' absolute bottom-0 left-0 right-0 py-2 px-2 flex items-center gap-1 bg-[rgba(255,255,255,.98)]'>
            <div className='flex items-center'>
                {/* <div className='w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-200 hover:cursor-pointer'>
                    <i className='fa-solid fa-circle-plus text-lg text-primary'></i>
                </div> */}

                <input
                    type='file'
                    id='file'
                    className='hidden'
                    onChange={(e) => setMedia(e.target.files![0])}
                />

                <label
                    htmlFor='file'
                    className='w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-200 hover:cursor-pointer'>
                    <i className='fa-regular fa-image text-lg text-primary'></i>
                </label>
                {/* 
                <div className='w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-200 hover:cursor-pointer'>
                    <i className='fa-solid fa-note-sticky text-lg text-primary'></i>
                </div>

                <div className='w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-200 hover:cursor-pointer'>
                    <i className='fa-solid fa-gif text-lg text-primary'></i>
                </div> */}
            </div>

            <input
                onKeyDown={HANDLE.keyDown}
                type='text'
                className=' rounded-full bg-gray-100 text-sm py-2 px-3 outline-none flex-1'
                placeholder='Aa'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />

            <div className='w-9 h-9 rounded-full flex items-center justify-center hover:bg-slate-200 hover:cursor-pointer'>
                <i className='fa-solid fa-heart text-xl text-red-500'></i>
            </div>
        </footer>
    );
};

MessengerInput.displayName = 'MessengerInput';
export default MessengerInput;
