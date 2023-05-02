import ImageC from '@/components/common/image';
import Link from 'next/link';
import { apple_icon, home_hero, microsoft_icon } from '../../../../public';
import LoginForm from './login-form';

const HomeHero = () => {
    return (
        <section className=' flex pt-[16px] mobile:flex-col-reverse'>
            <div className='w-[50%] mt-10 tablet:mt-0 mobile:w-full'>
                <h1 className=' text-[80px] bg-messenger text-transparent bg-clip-text leading-[80px] font-semibold pb-2 let tracking-wide tablet:text-[56px] mobile:text-center'>
                    Hang out <br /> anytime,
                    <br /> enywhere
                </h1>

                <p className='text-[#595959] text-lg mb-[38px] max-w-[434px] mobile:text-center'>
                    Messenger makes it easy and fun to stay close to your
                    favourite people.
                </p>

                {/* <Link href='#'>
                    <div className='bg-primary h-[40px] px-4 flex items-center justify-center rounded-3xl text-white'>
                        Continue as
                        <span className='font-medium ml-1'>Minh Dzung</span>
                    </div>
                </Link> */}

                <div>
                    <LoginForm />
                </div>

                <div className='mt-7  flex items-center gap-4 mobile:justify-center'>
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
            <figure className='w-[50%] translate-x-[30px] translate-y-[-24px] laptop:translate-x-0 laptop:translate-y-0 tablet:translate-x-0 tablet:translate-y-0 mobile:w-full'>
                <ImageC alt='Hero' src={home_hero} />
            </figure>
        </section>
    );
};
export default HomeHero;
