'use client';

import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { AuthContext } from '@/components/context/auth-provider';
import { useContext, useEffect, useState } from 'react';

import { db, storage } from '@/components/firebase';
import {
    arrayUnion,
    doc,
    serverTimestamp,
    Timestamp,
    updateDoc,
} from 'firebase/firestore';
import { User } from '@/components/types/auth-public';
import ImageC from '@/components/common/image';

type IProps = {
    userI: User;
};

const { v4 } = require('uuid');

const MessengerInput: React.FC<IProps> = ({ userI }) => {
    const [message, setMessage] = useState<string>('');
    const [media, setMedia] = useState<any>();
    const [preview, setPreview] = useState<any>();

    const { user } = useContext(AuthContext);
    const userId = userI.uid;

    const chatId =
        user && (user?.uid > userId ? user?.uid + userId : userId + user?.uid);

    const HANDLE = {
        sendMessage: async () => {
            if (!message && !media) return;
            if (media) {
                const storageRef = ref(storage, v4());

                const uploadTask = uploadBytesResumable(storageRef, media);

                await uploadTask.on('state_changed', () => {
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
                                        media: downloadURL,
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
        removePreview: () => {
            setMedia(null);
        },
    };

    useEffect(() => {
        if (!media) {
            setPreview(null);
            return;
        }

        const objectUrl = URL.createObjectURL(media);
        setPreview(objectUrl);

        return () => URL.revokeObjectURL(objectUrl);
    }, [media]);

    // console.log('check preview', preview);

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
                    onChange={(e) => {
                        if (!e.target.files || e.target.files.length === 0) {
                            setMedia(null);
                            return;
                        }

                        setMedia(e.target.files[0]);
                    }}
                />

                {!preview && (
                    <label
                        htmlFor='file'
                        className='w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-200 hover:cursor-pointer tablet:hidden'>
                        <i className='fa-regular fa-image text-lg text-primary'></i>
                    </label>
                )}
                {/* 
                <div className='w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-200 hover:cursor-pointer'>
                    <i className='fa-solid fa-note-sticky text-lg text-primary'></i>
                </div>

                <div className='w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-200 hover:cursor-pointer'>
                    <i className='fa-solid fa-gif text-lg text-primary'></i>
                </div> */}
            </div>

            <div className='flex-1 relative'>
                {preview && (
                    <div className='absolute bottom-[100%]'>
                        <figure className='max-w-[100px] relative animate-fadeInRight'>
                            <ImageC
                                src={preview}
                                alt='preview'
                                style='w-full h-full object-contain'
                            />
                            <div
                                className='w-5 h-5 flex items-center justify-center bg-white border rounded-full absolute -top-1 -right-2 hover:cursor-pointer hover:bg-slate-200'
                                onClick={HANDLE.removePreview}>
                                <i className='fa-solid fa-times'></i>
                            </div>
                        </figure>
                    </div>
                )}
                <input
                    onKeyDown={HANDLE.keyDown}
                    type='text'
                    className='w-full rounded-full bg-gray-100 text-sm py-2 px-3 outline-none flex-1'
                    placeholder='Aa'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>

            <div
                className='w-9 h-9 rounded-full flex items-center justify-center hover:bg-slate-200 hover:cursor-pointer'
                onClick={HANDLE.sendMessage}>
                <i
                    className='fa-solid fa-paper-plane-top text-xl text-primary'
                    style={{
                        color: message || media ? '#3b82f6' : '#ccc',
                    }}></i>
            </div>
        </footer>
    );
};

MessengerInput.displayName = 'MessengerInput';
export default MessengerInput;
