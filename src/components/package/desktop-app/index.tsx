import Footer from '@/components/common/footer';
import Header from '@/components/common/header';
import ImageC from '@/components/common/image';

const DesktopAppSC: React.FC = () => {
    return (
        <main className='pt-[100px]'>
            <Header />
            <section className='max-w-[1195px] mx-auto flex items-center pb-20 laptop:px-4 tablet:px-4 tablet:flex-col tablet:gap-8'>
                <div className='w-[45%] tablet:w-full tablet:text-center'>
                    <h1 className='text-[64px] leading-[80px] font-medium bg-messenger bg-clip-text text-transparent'>
                        Go big with <br /> Messenge
                    </h1>
                    <p className=' mt-6 text-lg text-gray-700 onlyTablet:px-[150px]'>
                        A simple app that lets you text, video call and stay
                        close to people you care about. For Mac and PC.
                    </p>

                    <div className='mt-5'>
                        <button className='bg-primary px-6 py-3 rounded-full hover:bg-secondary'>
                            <i className='fa-solid fa-laptop-arrow-down text-white'></i>
                            <span className='ml-2 font-medium text-white'>
                                Download for macOS
                            </span>
                        </button>
                    </div>
                </div>
                <div className='w-[55%] tablet:w-full'>
                    <figure className='w-[125%] h-full tablet:w-full'>
                        <ImageC
                            src='https://jungjung261.blob.core.windows.net/nextjs-project/MESSENGER/hero/destop-app-hero.png'
                            alt='Desktop app'
                            style='w-full h-full object-contain'
                        />
                    </figure>
                </div>
            </section>
            <Footer />
        </main>
    );
};

DesktopAppSC.displayName = 'DesktopAppSC';
export default DesktopAppSC;
