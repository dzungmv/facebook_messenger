'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

import { logo } from '../../../public';
import ImageC from './image';

interface NavProps {
    name: string;
    href: string;
}

const navs: NavProps[] = [
    {
        name: 'Features',
        href: '/features',
    },
    {
        name: 'Desktop app',
        href: '/desktop-app',
    },
    {
        name: 'Privacy & Safety',
        href: '/privacy-safety',
    },
];

const Header = () => {
    const param = usePathname();

    const [tab, setTab] = useState(false);

    const HANDLE = {
        openTab: () => {
            setTab((prev) => !prev);
        },
        closeTab: () => {
            setTab(false);
        },
    };
    return (
        <>
            <header className=' fixed top-0 left-0 right-0 bg-[rgba(255,255,255,.98)] z-50'>
                <section className='max-w-[1195px] mx-auto flex items-center justify-between py-5 laptop:px-4 tablet:px-4'>
                    <Link href='/'>
                        <figure>
                            <ImageC alt='logo' src={logo} style='w-10 h-10' />
                        </figure>
                    </Link>

                    <nav className='flex items-center gap-9 mobile:hidden'>
                        <a
                            className='group text-sm font-medium relative bg-messenger bg-clip-text text-transparent'
                            href='https://facebook-clone-nextjs-2023.vercel.app/'
                            target='_blank'>
                            <div className='py-[6px]'>Facebook UI</div>
                            <div className='absolute bottom-0 w-full h-[3px] rounded-lg scale-0  bg-primary group-hover:scale-100 group-focus:scale-x-100 transition-all duration-300'></div>
                        </a>
                        {navs.map((item: NavProps, index: number) => {
                            return (
                                <Link
                                    key={index}
                                    className='group text-sm font-medium relative'
                                    href={item.href}>
                                    <div className='py-[6px]'>{item.name}</div>
                                    <div className='absolute bottom-0 w-full h-[3px] rounded-lg scale-0  bg-primary group-hover:scale-100 group-focus:scale-x-100 transition-all duration-300'></div>
                                    <div
                                        className='absolute bottom-0 w-full h-[3px] rounded-lg scale-0  bg-primary group-hover:scale-100 group-focus:scale-x-100 transition-all duration-300'
                                        style={{
                                            transform:
                                                param === item.href
                                                    ? 'scaleX(1)'
                                                    : 'scaleX(0)',
                                        }}></div>
                                </Link>
                            );
                        })}

                        <a
                            className='group text-sm font-medium relative'
                            href='https://developers.facebook.com/products/messenger/'
                            target='_blank'>
                            <div className='py-[6px]'> For Developers</div>
                            <div className='absolute bottom-0 w-full h-[3px] rounded-lg scale-0  bg-primary group-hover:scale-100 group-focus:scale-x-100 transition-all duration-300'></div>
                        </a>
                    </nav>

                    <div
                        className='hidden mobile:block'
                        onClick={HANDLE.openTab}>
                        <i className='fa-solid fa-bars text-2xl'></i>
                    </div>
                </section>
            </header>

            {tab && (
                <div className='fixed top-0 left-0 right-0 h-full bg-white z-[51] p-4 animate-fadeInLeft'>
                    <div className='flex items-center justify-between'>
                        <figure>
                            <ImageC alt='logo' src={logo} style='w-10 h-10' />
                        </figure>
                        <div
                            className='w-10 h-10 bg-slate-100 flex items-center justify-center rounded-full hover:bg-slate-200 focus:touch-auto'
                            onClick={HANDLE.closeTab}>
                            <i className='fa-solid fa-xmark text-lg'></i>
                        </div>
                    </div>
                    <nav className='flex flex-col gap-5 mt-10'>
                        {navs.map((item: NavProps, index: number) => {
                            return (
                                <Link
                                    key={index}
                                    className=' text-base font-medium'
                                    href={item.href}>
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            )}
        </>
    );
};
export default Header;
