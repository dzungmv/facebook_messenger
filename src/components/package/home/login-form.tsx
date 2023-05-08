'use client';
import {
    FacebookAuthProvider,
    getAdditionalUserInfo,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
} from 'firebase/auth';

import { auth, db } from '@/components/firebase';

import ImageC from '@/components/common/image';
import { addDocument } from '@/components/firebase/services';
import { User } from '@/components/types/auth-public';
import { google_icon, logo } from '../../../../public';
import { doc, setDoc } from 'firebase/firestore';
import { AuthContext } from '@/components/context/auth-provider';
import { useContext } from 'react';
import { useRouter } from 'next/navigation';

const facebookProvider = new FacebookAuthProvider();
const googleProvider = new GoogleAuthProvider();

interface IAuthProps {
    additionalUserInfo: {
        isNewUser: boolean;
    };
    user: User;
}

const LoginForm = () => {
    const router = useRouter();
    const { user } = useContext(AuthContext);

    const HANDLE = {
        loginWithFacebook: async () => {
            try {
                await signInWithRedirect(auth, facebookProvider);
            } catch (error) {}
        },
        loginWithGoogle: async () => {
            try {
                const res = await signInWithPopup(auth, googleProvider);

                const detais = getAdditionalUserInfo(res);

                if (detais?.isNewUser) {
                    await setDoc(doc(db, 'users', res.user.uid), {
                        uid: res.user.uid,
                        displayName: res.user.displayName,
                        email: res.user.email,
                        photoURL: res.user.photoURL,
                    });

                    await setDoc(doc(db, 'user-chats', res.user.uid), {});
                }

                router.push('/messenger');
            } catch (error) {}
        },
        goToMess: () => {
            router.push('/messenger');
        },
    };
    return (
        <section className='flex flex-col gap-3'>
            {!user ? (
                <>
                    {/* <div
                        className='border flex items-center gap-2 w-[65%] tablet:w-full py-2 justify-center rounded-lg hover:cursor-pointer hover:bg-slate-100'
                        onClick={HANDLE.loginWithFacebook}>
                        <figure className='w-8 h-8'>
                            <ImageC
                                src='https://jungjung261.blob.core.windows.net/nextjs-project/system-ui/branch.svg'
                                style='w-full h-full object-contain'
                            />
                        </figure>
                        <span>Sign in with Facebook</span>
                    </div> */}
                    <div
                        className='border flex items-center gap-2 w-[65%] tablet:w-full py-2 justify-center rounded-lg hover:cursor-pointer hover:bg-slate-100'
                        onClick={HANDLE.loginWithGoogle}>
                        <figure className='w-7 h-7'>
                            <ImageC src={google_icon} />
                        </figure>
                        <span>Sign in with Google</span>
                    </div>
                </>
            ) : (
                <div
                    className='border flex items-center gap-2 w-[65%] tablet:w-full py-2 justify-center rounded-lg hover:cursor-pointer hover:bg-slate-100'
                    onClick={HANDLE.goToMess}>
                    <figure className='w-7 h-7'>
                        <ImageC src={logo} />
                    </figure>
                    <span>Go to Messenger</span>
                </div>
            )}
            {/* <input
                type='text'
                placeholder='Email address or phone number'
                className='w-full px-4 py-3 bg-gray-100 rounded-3xl mb-4'
            />
            <input
                type='text'
                placeholder='Password'
                className='w-full px-4 py-3 bg-gray-100 rounded-3xl'
            />

            <button
                className='bg-primary py-3 rounded-3xl mt-5 w-full text-lg font-medium text-white'
                onClick={handleLogin}>
                Login
            </button>

            <div className='flex items-center justify-center'>
                <Link
                    href='#'
                    className='mt-4 text-sm font-medium text-primary underline !flex text-center'>
                    Forgotten your password?
                </Link>
            </div>

            <div className='mt-4 flex items-center gap-1'>
                <input type='checkbox' id='keep-signin' />
                <label htmlFor='keep-signin' className='text-sm text-gray-500'>
                    Keep me sign in
                </label>
            </div> */}
        </section>
    );
};
export default LoginForm;
