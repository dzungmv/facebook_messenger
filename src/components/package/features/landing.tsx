'use client';

import ImageC from '@/components/common/image';
import { useState } from 'react';

const themesTabs = [
    {
        id: 1,
        title: 'LOVE',
        image: 'https://jungjung261.blob.core.windows.net/nextjs-project/MESSENGER/hero/features-theme.png',
    },
    {
        id: 2,
        title: 'TIE DYE',
        image: 'https://jungjung261.blob.core.windows.net/nextjs-project/MESSENGER/hero/features-theme-2.png',
    },
    {
        id: 3,
        title: 'PRIDE',
        image: 'https://jungjung261.blob.core.windows.net/nextjs-project/MESSENGER/hero/features-theme-3.png',
    },
];

interface IThemesTab {
    id: number;
    title: string;
    image: string;
}

const FeaturesLanding = () => {
    const [themeTab, setThemeTab] = useState(themesTabs[0]);

    return (
        <>
            <section className='bg-[#fcfbff] mt-[120px] tablet:px-4'>
                <div className='flex items-center max-w-[1195px] mx-auto tablet:flex-col tablet:pt-5'>
                    <div className='w-[50%] px-[120px] tablet:px-0 tablet:w-full tablet:text-center'>
                        <h3 className='text-[15px] text-[#595959]'>
                            WATCH TOGETHER
                        </h3>

                        <h2 className='mt-3 font-semibold text-[56px] leading-[64px] mobile:text-[36px] mobile:leading-10'>
                            Enjoy videos with your friends
                        </h2>

                        <p className='my-4 text-[rgba(89,89,89,1)]'>
                            Watch films, music videos, TV shows and more with
                            your friends over video chat.
                        </p>
                    </div>

                    <div className='w-[50%] mobile:w-full'>
                        <video
                            autoPlay
                            loop
                            muted
                            className='pointer-events-none'>
                            <source
                                src='https://jungjung261.blob.core.windows.net/nextjs-project/MESSENGER/hero/feature-watch.mp4'
                                type='video/mp4'
                            />
                        </video>
                    </div>
                </div>
            </section>

            <section className='mt-[120px] tablet:px-4'>
                <div className='flex items-center max-w-[1195px] mx-auto tablet:flex-col-reverse'>
                    <div className='w-[50%] flex items-center justify-center tablet:w-full'>
                        <video
                            autoPlay
                            loop
                            muted
                            className='w-[50%] mobile:w-full pointer-events-none'>
                            <source
                                src='https://jungjung261.blob.core.windows.net/nextjs-project/MESSENGER/hero/features-enjoy.mp4'
                                type='video/mp4'
                            />
                        </video>
                    </div>

                    <div className='w-[50%] px-[80px] tablet:px-0 mobile:w-full tablet:text-center'>
                        <h3 className='text-[15px] text-[#595959]'>
                            CUSTOM REACTIONS
                        </h3>

                        <h2 className='mt-3 font-semibold text-[56px] leading-[64px] max-w-[300px] tablet:max-w-none mobile:text-[36px]'>
                            Say it with any emoji
                        </h2>

                        <p className='my-4 text-[rgba(89,89,89,1)]'>
                            Lost for words? Now you can customise your reactions
                            with way more emojis to choose from, including 🎉
                            and 🔥.
                        </p>
                    </div>
                </div>
            </section>

            <section className='bg-[#fcfbff] mt-[120px] py-10 tablet:px-4'>
                <div className='flex items-center max-w-[1195px] mx-auto relative tablet:flex-col'>
                    <div className='w-[50%] px-[120px] tablet:px-0 mobile:w-full tablet:text-center'>
                        <h3 className='text-[15px] text-[#595959]'>
                            ANIMATED EFFECTS
                        </h3>

                        <h2 className='mt-3 font-semibold text-[56px] leading-[64px] mobile:text-[36px]'>
                            Express yourself
                        </h2>

                        <p className='my-4 text-[rgba(89,89,89,1)]'>
                            Bring your conversations to life with fun AR
                            effects, message effects and selfie stickers*.
                        </p>

                        <p className=' absolute bottom-0 text-gray-500 text-sm'>
                            *Coming soon
                        </p>
                    </div>

                    <div className='w-[50%] mobile:w-full'>
                        <figure className='w-full h-full'>
                            <ImageC
                                src={
                                    'https://jungjung261.blob.core.windows.net/nextjs-project/MESSENGER/hero/features-animated.png'
                                }
                                alt={'Let the conversation flow'}
                                style='w-full h-full'
                            />
                        </figure>
                    </div>
                </div>
            </section>

            <section className='mt-[120px]'>
                <div className='flex items-center max-w-[1195px] mx-auto tablet:px-4 tablet:flex-col-reverse tablet:gap-4'>
                    <div className='w-[75%] flex justify-center items-center tablet:w-full mobile:flex-col'>
                        <div className='w-[50%] flex justify-center mobile:w-full'>
                            <div className='flex flex-col gap-5'>
                                {themesTabs.map((tab: IThemesTab) => {
                                    return (
                                        <div
                                            key={tab.id}
                                            className='flex items-center gap-2 hover:cursor-pointer'
                                            onClick={() => setThemeTab(tab)}>
                                            <div
                                                className='w-8 h-8 rounded-full flex items-center justify-center'
                                                style={{
                                                    backgroundColor:
                                                        themeTab.id === tab.id
                                                            ? '#0084ff'
                                                            : '#e5e5e5',
                                                }}>
                                                <i className='fa-regular fa-message text-white'></i>
                                            </div>

                                            <p
                                                className='text-sm font-medium'
                                                style={{
                                                    color:
                                                        themeTab.id === tab.id
                                                            ? '#0084ff'
                                                            : '#e5e5e5',
                                                }}>
                                                {tab.title}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className='w-[50%] flex items-center justify-center mobile:w-full'>
                            <figure className='w-[90%] h-full'>
                                <ImageC
                                    src={themeTab.image}
                                    alt={'Let the conversation flow'}
                                    style='w-full h-full'
                                />
                            </figure>
                        </div>
                    </div>
                    <div className='w-[25%] tablet:w-full tablet:text-center'>
                        <h3 className='text-[15px] text-[#595959]'>
                            CHAT THEMES
                        </h3>

                        <h2 className='mt-3 font-semibold text-[56px] leading-[64px] max-w-[300px] tablet:max-w-none mobile:max-w-none mobile:text-[36px] mobile:leading-10'>
                            Your chats <br /> Your way
                        </h2>

                        <p className='my-4 text-[rgba(89,89,89,1)]'>
                            Choose from fun themes and colours to make your
                            chats more personal ❤️ 🏳️‍🌈
                        </p>
                        {/* </div> */}
                    </div>
                </div>
            </section>

            <section className='bg-[#fcfbff] mt-[120px] py-10'>
                <div className='flex items-center max-w-[1195px] mx-auto tablet:px-4 tablet:flex-col tablet:text-center'>
                    <div className='w-[50%] px-[120px] tablet:px-0 mobile:w-full'>
                        <h3 className='text-[15px] text-[#595959]'>
                            REPLIES & FORWARDING
                        </h3>

                        <h2 className='mt-3 font-semibold text-[56px] leading-[64px] mobile:text-[36px] mobile:leading-10'>
                            Let the conversation flow
                        </h2>

                        <p className='my-4 text-[rgba(89,89,89,1)]'>
                            Choose the exact message that you want to reply to
                            or forward, directly in your chat.
                        </p>
                    </div>

                    <div className='w-[50%] mobile:w-full'>
                        <figure className='w-full h-full'>
                            <ImageC
                                src={
                                    'https://jungjung261.blob.core.windows.net/nextjs-project/MESSENGER/hero/features-flow.png'
                                }
                                alt={'Let the conversation flow'}
                                style='w-full h-full'
                            />
                        </figure>
                    </div>
                </div>
            </section>

            <section className='mt-[120px] '>
                <div className='flex items-center max-w-[1195px] mx-auto tablet:px-4 tablet:flex-col-reverse tablet:text-center'>
                    <div className='w-[50%] flex items-center justify-center mobile:w-full'>
                        <video
                            autoPlay
                            loop
                            muted
                            className='w-[40%] onlyTablet:w-[70%] mobile:w-[50%] pointer-events-none'>
                            <source
                                src='https://jungjung261.blob.core.windows.net/nextjs-project/MESSENGER/hero/features-play.mp4'
                                type='video/mp4'
                            />
                        </video>
                    </div>

                    <div className='w-[50%] px-[80px] tablet:px-0 mobile:w-full'>
                        <h3 className='text-[15px] text-[#595959]'>APP LOCK</h3>

                        <h2 className='mt-3 font-semibold text-[56px] leading-[64px] max-w-[300px] tablet:max-w-none mobile:text-[36px] mobile:leading-10'>
                            Keep your chats extra secure
                        </h2>

                        <p className='my-4 text-[rgba(89,89,89,1)]'>
                            Opt in to use your device&apos;s face or fingerprint
                            ID to unlock Messenger, so only you have access to
                            your chats.
                        </p>
                    </div>
                </div>
            </section>

            <section className='bg-[#fcfbff] mt-[120px] pt-4'>
                <div className='flex items-center max-w-[1195px] mx-auto tablet:px-4 tablet:flex-col tablet:text-center'>
                    <div className='w-[50%] px-[120px] tablet:px-0 mobile:w-full'>
                        <h3 className='text-[15px] text-[#595959]'>PAYMENTS</h3>

                        <h2 className='mt-3 font-semibold text-[56px] leading-[64px] mobile:text-[36px] mobile:leading-10'>
                            Send money to friends & family
                        </h2>

                        <p className='my-4 text-[rgba(89,89,89,1)]'>
                            Send and receive money securely and easily by adding
                            your debit card, PayPal account or reloadable
                            prepaid card.*
                        </p>
                    </div>

                    <div className='w-[50%] tablet:w-full'>
                        <figure className='w-[80%] mobile:w-full h-full'>
                            <ImageC
                                src={
                                    'https://jungjung261.blob.core.windows.net/nextjs-project/MESSENGER/hero/features-payment.png'
                                }
                                alt={'Let the conversation flow'}
                                style='w-full h-full'
                            />
                        </figure>
                    </div>
                </div>
            </section>

            <section className='mt-[120px] pt-4'>
                <div className='flex items-center max-w-[1195px] mx-auto tablet:px-4 tablet:flex-col-reverse tablet:text-center'>
                    <div className='w-[50%] flex items-center justify-end tablet:justify-center tablet:w-full'>
                        <figure className='w-[70%] h-full mobile:w-full'>
                            <ImageC
                                src={
                                    'https://jungjung261.blob.core.windows.net/nextjs-project/MESSENGER/hero/features-bussiness.png'
                                }
                                alt={'Let the conversation flow'}
                                style='w-full h-full'
                            />
                        </figure>
                    </div>
                    <div className='w-[50%] px-[120px] tablet:px-0 mobile:w-full'>
                        <h3 className='text-[15px] text-[#595959]'>BUSINESS</h3>

                        <h2 className='mt-3 font-semibold text-[56px] leading-[64px] mobile:text-[36px] mobile:leading-10'>
                            Connect with businesses
                        </h2>

                        <p className='my-4 text-[rgba(89,89,89,1)]'>
                            Find deals, make reservations and get customer
                            support by chatting with your favourite businesses
                            straight from Messenger.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

FeaturesLanding.displayName = 'FeaturesWatch';
export default FeaturesLanding;
