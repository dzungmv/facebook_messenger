import Footer from '@/components/common/footer';
import Header from '@/components/common/header';
import ImageC from '@/components/common/image';

const PAPERS = [
    {
        title: 'Privacy PolicyMessenger secret conversations: Technical whitepaper',
        link: 'https://about.fb.com/wp-content/uploads/2016/07/messenger-secret-conversations-technical-whitepaper.pdf',
    },
    {
        title: 'Meta`s approach to safer private messaging on Messenger and Instagram direct messaging',
        link: 'https://messengernews.fb.com/wp-content/uploads/2021/12/Metas-approach-to-safer-private-messaging-on-MSGR-and-IG-DMs-4.pdf',
    },
    {
        title: 'Independent assessment: Expanding end-to-end encryption protects fundamental human rights',
        link: 'https://about.fb.com/news/2022/04/expanding-end-to-end-encryption-protects-fundamental-human-rights/',
    },
];

interface IPaperProps {
    title: string;
    link: string;
}

const PrivacySafetSC: React.FC = () => {
    return (
        <main className='pt-[100px]'>
            <Header />
            <section className=''>
                <div className='max-w-[1195px] mx-auto flex items-center tablet:flex-col'>
                    <div className='w-[50%] tablet:w-full tablet:text-center'>
                        <h1 className='font-semibold text-[76px] onlyTablet:text-[64px] mobile:text-[56px] leading-[86px] onlyTablet:leading-[76px] mobile:leading-[64px] bg-messenger bg-clip-text text-transparent'>
                            Connect with <br /> confidence
                        </h1>
                    </div>
                    <div className='w-[50%] tablet:w-full'>
                        <figure className='w-full h-full'>
                            <ImageC
                                src='https://jungjung261.blob.core.windows.net/nextjs-project/MESSENGER/hero/pravacy-hero.png'
                                alt='Privacy'
                                style='w-full h-full object-contain'
                            />
                        </figure>
                    </div>
                </div>

                <div className='max-w-[1195px] mx-auto flex items-center mt-[100px] mobile:mt-16 tablet:flex-col-reverse tablet:px-4 tablet:text-center'>
                    <div className='w-[50%] tablet:w-full'>
                        <figure className='w-[120%] tablet:w-full h-full -translate-x-[200px] tablet:translate-x-0'>
                            <ImageC
                                src='https://jungjung261.blob.core.windows.net/nextjs-project/MESSENGER/hero/privacy-mess.png'
                                alt='Privacy'
                                style='w-full h-full object-contain'
                            />
                        </figure>
                    </div>
                    <div className='w-[50%] tablet:w-full'>
                        <h3 className='text-gray-500 mb-4'>
                            KEEPING YOUR INFORMATION SAFE
                        </h3>
                        <h2 className='font-semibold text-[64px] leading-[76px] onlyTablet:text-[56px] mobile:text-[36px] tablet:leading-[64px]'>
                            Your messages are your messages.
                        </h2>

                        <p className='mt-5 text-gray-600 text-lg mobile:text-base'>
                            We want you to know what information we collect and
                            how we use it. We don&apos;t use the content of your
                            messages with other people for ad targeting, which
                            means that advertisers can&apos;t target you based
                            on what you say in messages. As with other parts of
                            Facebook, we collect information from Messenger
                            primarily to provide the service, improve the
                            product experience and keep people safe and secure.
                        </p>

                        <div className='mt-7'>
                            <a
                                href='https://www.facebook.com/ads/about/?entry_product=ad_preferences'
                                target='_blank'
                                className='py-3 px-6 bg-primary text-white hover:cursor-pointer hover:bg-secondary rounded-full text-sm'>
                                Learn more
                            </a>
                        </div>
                    </div>
                </div>

                <div className='flex items-center mt-[100px] mobile:mt-14 text-center flex-col relative pb-10 tablet:px-4'>
                    <div className='absolute w-full h-full backdrop-blur-[350px] '></div>
                    <div className=' absolute w-[300px] h-[300px] rounded-full bg-messengerShadow right-0 top-0 bottom-0 z-[-1]'></div>
                    <div className=' absolute w-[300px] h-[300px] rounded-full bg-messengerShadow left-0 bottom-0 z-[-1]'></div>

                    <div className='max-w-[1195px] mx-auto relative pt-10'>
                        <h3 className='text-gray-500'>
                            BUILT WITH SAFETY BY DESIGN
                        </h3>
                        <h2 className='text-3xl font-medium mt-5 z-2'>
                            Messenger has tools to help keep you safe and in
                            control of your own experience.
                        </h2>

                        <h3 className='text-gray-500 text-lg mt-5'>
                            Messenger&apos;s approach to safer private
                            messaging:
                        </h3>
                        <div className='flex gap-16 w-[90%] mx-auto mt-14 tablet:w-full onlyTablet:gap-5 tablet:flex-wrap tablet:justify-center'>
                            <div className='bg-white rounded-[20px] w-[calc(100%/3)] onlyTablet:w-[calc(100%/2-10px)] mobile:w-full pb-[80px] pt-16 px-7 text-center shadow-f'>
                                <h4 className=' text-2xl font-semibold'>
                                    Preventing harm at the source
                                </h4>
                                <p className='mt-16 text-lg text-gray-500'>
                                    Preventing harm from happening in the first
                                    place is the best way to keep people safe.
                                </p>
                            </div>

                            <div className='bg-white rounded-[20px] w-[calc(100%/3)] onlyTablet:w-[calc(100%/2-10px)] mobile:w-full  pb-[80px] pt-16 px-7 text-center shadow-s'>
                                <h4 className=' text-2xl font-semibold'>
                                    Giving you more choice and control
                                </h4>
                                <p className='mt-16 text-lg text-gray-500'>
                                    In addition to our efforts to prevent harm,
                                    we are giving you more control of your
                                    messaging inbox to account for the variety
                                    of experiences you want.
                                </p>
                            </div>

                            <div className='bg-white rounded-[20px] w-[calc(100%/3)] onlyTablet:w-[calc(100%/2-10px)] mobile:w-full  pb-[80px] pt-16 px-7 text-center shadow-t'>
                                <h4 className=' text-2xl font-semibold'>
                                    Responding <br /> with care
                                </h4>
                                <p className='mt-16 text-lg text-gray-500'>
                                    When we become aware of potential abuse on
                                    our services, we respond. We do this by
                                    enforcing our Community Standards, sharing
                                    data with NCMEC and our law enforcement
                                    agencies.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='max-w-[1195px] mx-auto relative pt-10 text-center mt-[100px] mobile:mt-10 tablet:px-4'>
                    <h3 className='text-gray-500'>HELPING TO KEEP YOU SAFE</h3>
                    <h2 className='text-3xl font-medium mt-5 z-2'>
                        Messenger helps to keep you safe online.
                    </h2>

                    <h3 className='text-gray-500 text-lg mt-5'>
                        That&apos;s why we&apos;re constantly working to stop
                        malicious activity before it reaches you. <br /> Here
                        are the ways we work to protect your safety on
                        Messenger:
                    </h3>
                    <div className='flex gap-10 w-[90%] mx-auto mt-14 flex-wrap onlyTablet:gap-5 tablet:w-full'>
                        <div className='bg-white rounded-[20px] w-[calc(100%/2-20px)] onlyTablet:w-[calc(100%/2-10px)] mobile:w-full pb-7 pt-7 px-7 text-start border border-dashed border-[#9b111e]'>
                            <h4 className=' text-2xl font-semibold text-[#9b111e]'>
                                Reduce unwanted interactions
                            </h4>
                            <p className='mt-7 text-lg text-gray-500'>
                                We filter potentially harmful messages so they
                                don&apos;t reach your inbox. Safety notices may
                                pop up in your chats to help you spot potential
                                scams or imposters, and we detect and block
                                millions of fake accounts on Facebook every day.
                            </p>
                        </div>

                        <div className='bg-white rounded-[20px] w-[calc(100%/2-20px)] onlyTablet:w-[calc(100%/2-10px)] mobile:w-full pb-7 pt-7 px-7 text-start border border-dashed border-[#0f52ba]'>
                            <h4 className=' text-2xl font-semibold text-[#0f52ba]'>
                                Control who you let in
                            </h4>
                            <p className='mt-7 text-lg text-gray-500'>
                                Messenger continuously innovates to protect you
                                from harm, and tools like multi-block help you
                                control your experience. You decide who reaches
                                your Chats list, who goes to your message
                                request folder, and who can&apos;t message or
                                call you at all.
                            </p>
                        </div>

                        <div className='bg-white rounded-[20px] w-[calc(100%/2-20px)] onlyTablet:w-[calc(100%/2-10px)] mobile:w-full pb-7 pt-7 px-7 text-start border border-dashed border-[#00c957]'>
                            <h4 className=' text-2xl font-semibold text-[#00c957]'>
                                Reduce the spread of misinformation
                            </h4>
                            <p className='mt-7 text-lg text-gray-500'>
                                To help reduce the spread of viral
                                misinformation and harmful content, we limit the
                                number of chats that a message can be forwarded
                                to at one time. We also have additional
                                protections in place for content that has been
                                identified as misinformation on Facebook and
                                shared directly in Messenger. For more
                                information, see How Facebook protects
                                elections.
                            </p>
                        </div>

                        <div className='bg-white rounded-[20px] w-[calc(100%/2-20px)] onlyTablet:w-[calc(100%/2-10px)] mobile:w-full pb-7 pt-7 px-7 text-start border border-dashed border-[#6a0dad]'>
                            <h4 className=' text-2xl font-semibold text-[#6a0dad]'>
                                Foster a safer community
                            </h4>
                            <p className='mt-7 text-lg text-gray-500'>
                                If you come across possible harmful content or
                                behaviour, such as harassment or impersonation,
                                please report it. If we see that it violates our
                                Community Standards, we&apos;ll take appropriate
                                action, which could include disabling their
                                account or limiting their ability to send
                                messages.
                            </p>
                        </div>

                        <div className='bg-white rounded-[20px] w-[calc(100%/2-20px)] onlyTablet:w-[calc(100%/2-10px)] mobile:w-full pb-7 pt-7 px-7 text-start border border-dashed border-primary'>
                            <h4 className=' text-2xl font-semibold text-primary'>
                                Enhance safeguards for minors
                            </h4>
                            <p className='mt-7 text-lg text-gray-500'>
                                Keeping minors safe on our platforms is one of
                                our greatest responsibilities. We automatically
                                provide enhanced safety features for minors,
                                such as limiting who can message them and how
                                they can be found in search, and offer them
                                education and resources. We also use machine
                                learning to detect and disable accounts who are
                                engaging in inappropriate interactions with
                                children.
                            </p>
                        </div>

                        <div className='bg-white rounded-[20px] w-[calc(100%/2-20px)] onlyTablet:w-[calc(100%/2-10px)] mobile:w-full pb-7 pt-7 px-7 text-start border border-dashed border-amber-500'>
                            <h4 className=' text-2xl font-semibold text-amber-500'>
                                Review and enforce
                            </h4>
                            <p className='mt-7 text-lg text-gray-500'>
                                Reporting is an essential tool for responding to
                                abuse effectively and preventing further harm.
                                Reports are prioritised based on the severity of
                                harm, which allows us to respond quickly to
                                issues such as exploitation or child safety.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='max-w-[1195px] mx-auto mt-[100px] flex items-center laptop:px-4 tablet:px-4 tablet:flex-col'>
                    <div className='w-[50%] tablet:w-full'>
                        <h2 className='text-[56px] leading-[64px]'>
                            Whitepapers
                        </h2>

                        <p className='text-lg text-gray-500 mt-5'>
                            For in-depth, technical explanations of our tools
                            and techniques, you can find our downloadable
                            whitepapers here:
                        </p>

                        <div className='mt-6 flex flex-col gap-2'>
                            {PAPERS.map((item: IPaperProps, index: number) => {
                                return (
                                    <a
                                        key={index}
                                        href={item.link}
                                        target='_blank'
                                        className='group flex items-center gap-2 bg-messenger bg-clip-text text-transparent'>
                                        <i className='fa-regular fa-link group-hover:translate-x-[3px] transition-all duration-300'></i>
                                        <span>{item.title}</span>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                    <div className='w-[50%] tablet:w-full'>
                        <figure className='w-full h-full'>
                            <ImageC
                                src='https://jungjung261.blob.core.windows.net/nextjs-project/MESSENGER/hero/privacy-paper.png'
                                alt='Privacy paper'
                                style='w-full h-full object-contain'
                            />
                        </figure>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
};

PrivacySafetSC.displayName = 'PrivacySafetSC';
export default PrivacySafetSC;
