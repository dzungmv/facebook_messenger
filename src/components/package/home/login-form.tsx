'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
    const router = useRouter();
    const handleLogin = () => {
        router.push('/messenger');
    };
    return (
        <section className='max-w-[350px] mobile:max-w-none'>
            <input
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
            </div>
        </section>
    );
};
export default LoginForm;
