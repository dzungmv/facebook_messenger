import ImageC from '@/components/common/image';

const FeaturesHero = () => {
    return (
        <section className='flex items-center pt-[16px] tablet:flex-col max-w-[1195px] mx-auto laptop:px-4 tablet:px-4 mobile:mb-[64px]'>
            <div className='w-[50%] mt-[100px] tablet:mt-0 tablet:w-full'>
                <h1 className=' text-[80px] bg-messenger text-transparent bg-clip-text leading-[80px] font-semibold pb-2 let tracking-wide tablet:text-[56px] tablet:leading-[64px] tablet:text-center'>
                    More way <br className='tablet:hidden' /> to stay
                    <br /> connected
                </h1>

                <p className='text-[#595959] text-lg mb-[38px] max-w-[434px] tablet:max-w-none tablet:text-center mt-5'>
                    Messenger has everything you need to feel closer to your
                    favourite people.
                </p>
            </div>
            <div className='w-[50%] tablet:w-full'>
                <figure className='w-[135%] translate-x-[30px] translate-y-[-24px] laptop:translate-x-0 laptop:translate-y-0 tablet:translate-x-0 tablet:translate-y-0 '>
                    <ImageC
                        alt='Hero'
                        src={
                            'https://jungjung261.blob.core.windows.net/nextjs-project/MESSENGER/hero/features-hero.png'
                        }
                        style='w-full h-full object-contain'
                    />
                </figure>
            </div>
        </section>
    );
};

FeaturesHero.displayName = 'FeaturesHero';
export default FeaturesHero;
