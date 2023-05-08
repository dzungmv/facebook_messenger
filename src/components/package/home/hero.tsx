import ImageC from '@/components/common/image';
import { apple_icon, google_icon, microsoft_icon } from '../../../../public';
import LoginForm from './login-form';

const HomeHero = () => {
    return (
        <section className=' flex pt-[16px] tablet:flex-col tablet:gap-8'>
            <div className='w-[50%] mt-10 tablet:mt-0 tablet:w-full tablet:text-center'>
                <h1 className=' text-[80px] bg-messenger text-transparent bg-clip-text leading-[80px] font-semibold pb-2 let tracking-wide tablet:text-[56px] tablet:leading-[64px] mobile:text-center'>
                    Hang out <br /> anytime,
                    <br /> enywhere
                </h1>

                <p className='text-[#595959] text-lg mb-[38px] max-w-[434px] mobile:text-center mt-5 tablet:max-w-none'>
                    Messenger makes it easy and fun to stay close to your
                    favourite people.
                </p>

                {/* <Link href='#'>
                    <div className='bg-primary h-[40px] px-4 flex items-center justify-center rounded-3xl text-white'>
                        Continue as
                        <span className='font-medium ml-1'>Minh Dzung</span>
                    </div>
                </Link> */}

                <div className=''>
                    <LoginForm />
                </div>

                <div className='mt-7  flex items-center gap-4 tablet:justify-center'>
                    <a className='flex items-center gap-2 rounded-lg border border-black p-2 py-1 hover:cursor-pointer hover:-translate-y-1 transition-all duration-300'>
                        <figure>
                            <ImageC src={apple_icon} style='w-[25px]' />
                        </figure>
                        <div className='flex-1'>
                            <p className=' text-xs'>Download on</p>
                            <p className='font-medium text-lg -mt-1'>
                                App Store
                            </p>
                        </div>
                    </a>

                    <a className='flex items-center gap-2 rounded-lg p-2 py-1 bg-black hover:cursor-pointer hover:-translate-y-1 transition-all duration-300'>
                        <figure>
                            <ImageC src={microsoft_icon} style='w-[25px]' />
                        </figure>
                        <div className='flex-1'>
                            <p className=' text-xs text-white'>Get it on</p>
                            <p className='font-medium text-lg -mt-1 text-white'>
                                Microsoft
                            </p>
                        </div>
                    </a>
                </div>
            </div>
            <figure className='w-[50%] translate-x-[30px] translate-y-[-24px] laptop:translate-x-0 laptop:translate-y-0 tablet:translate-x-0 tablet:translate-y-0 tablet:w-full'>
                <ImageC
                    alt='Hero'
                    src={
                        'https://jungjung261.blob.core.windows.net/nextjs-project/MESSENGER/hero/home-hero.png'
                    }
                    style='w-full h-full object-contain'
                    priority={true}
                />
            </figure>
        </section>
    );
};
export default HomeHero;
