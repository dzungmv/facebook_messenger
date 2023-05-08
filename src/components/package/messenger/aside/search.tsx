'use client';

import { useContext, useState } from 'react';

import { Avatar } from '@/components/common/image';
import { db } from '@/components/firebase';
import { User } from '@/components/types/auth-public';
import {
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    serverTimestamp,
    setDoc,
    updateDoc,
    where,
} from 'firebase/firestore';

import { AuthContext } from '@/components/context/auth-provider';
import { useRouter } from 'next/navigation';

const MessengerSearch = () => {
    const router = useRouter();
    const { user } = useContext(AuthContext);
    const [searchBox, setSearchBox] = useState<boolean>(false);

    const [username, setUsername] = useState<string>('');
    const [pendingSearch, setPendingSearch] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const [searchResult, setSearchResult] = useState({} as User);

    const HANDLE = {
        openSearchBox: () => {
            setSearchBox((prev) => !prev);
        },
        closeSearchBox: () => {
            setSearchBox(false);
            setSearchResult({} as User);
            setUsername('');
        },
        handleSearch: async () => {
            const usersRef = collection(db, 'users');
            const q = query(usersRef, where('displayName', '==', username));

            try {
                setPendingSearch(true);
                const querySnapshot = await getDocs(q);

                querySnapshot.forEach((doc) => {
                    setSearchResult(doc.data() as User);
                });
                setPendingSearch(false);
            } catch (error: any) {
                setError(error);
                setPendingSearch(false);
            }
        },
        keyDown: (e: React.KeyboardEvent<HTMLInputElement>) => {
            e.key === 'Enter' && HANDLE.handleSearch();
        },

        sellectUser: async () => {
            const combinedId =
                user!.uid > searchResult?.uid
                    ? user!.uid + searchResult?.uid
                    : searchResult?.uid + user!.uid;

            try {
                const res = await getDoc(doc(db, 'chats', combinedId));

                if (!res.exists()) {
                    //create a chat in chats collection
                    await setDoc(doc(db, 'chats', combinedId), {
                        messages: [],
                    });

                    //create user chats
                    await updateDoc(doc(db, 'user-chats', user!.uid), {
                        [combinedId + '.userInfo']: {
                            uid: searchResult.uid,
                            displayName: searchResult.displayName,
                            photoURL: searchResult.photoURL,
                        },
                        [combinedId + '.date']: serverTimestamp(),
                    });

                    await updateDoc(doc(db, 'user-chats', searchResult.uid), {
                        [combinedId + '.userInfo']: {
                            uid: user!.uid,
                            displayName: user!.displayName,
                            photoURL: user!.photoURL,
                        },
                        [combinedId + '.date']: serverTimestamp(),
                    });
                }

                // router.push(`/messenger/${combinedId}`);
            } catch (error) {}

            setSearchResult({} as User);
            setUsername('');
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
                    <span className='text-gray-500'>Search user</span>
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
                                value={username}
                                placeholder='Search user'
                                onKeyDown={HANDLE.keyDown}
                                className='flex-1 bg-slate-100 rounded-full px-3 py-[10px] text-sm outline-none text-gray-500'
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        <div className='mt-3'>
                            {Object.keys(searchResult).length > 0 && (
                                <div
                                    className='flex items-center gap-2 p-2 py-1 rounded-lg hover:bg-slate-100 hover:cursor-pointer'
                                    onClick={HANDLE.sellectUser}>
                                    <figure className='w-10 h-10 rounded-full'>
                                        <Avatar
                                            src={searchResult?.photoURL}
                                            style='w-full h-full rounded-full object-cover'
                                        />
                                    </figure>

                                    <div className='flex-1 text-sm font-medium'>
                                        {searchResult?.displayName}
                                    </div>
                                </div>
                            )}

                            {!Object.keys(searchResult).length && (
                                <span className='text-center text-gray-500 text-sm'>
                                    No user found
                                </span>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

MessengerSearch.displayName = 'MessengerSearch';
export default MessengerSearch;
