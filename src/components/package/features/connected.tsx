import ImageC from '@/components/common/image';

const FeaturesConnected = () => {
    return (
        <section className='text-center max-w-[1195px] mx-auto tablet:px-4'>
            <p className='text-[15px] text-[#595959]'>
                CROSS-APP COMMUNICATION
            </p>
            <h2 className='text-[56px] break-keep font-medium leading-[75px] mt-3'>
                Hang with your
                <br /> favourite people on your <br /> favourite apps and
                <br />
                devices
            </h2>

            <p className='text-lg text-[rgba(89,89,89,1)] mt-5'>
                Messenger powers conversations within Facebook, Instagram,
                <br />
                Portal and Oculus (coming soon).
            </p>

            <div className='flex items-center justify-center mt-14'>
                <figure className='w-[500px] mobile:w-full'>
                    <ImageC
                        src={
                            'https://jungjung261.blob.core.windows.net/nextjs-project/MESSENGER/hero/features_connected.png'
                        }
                        alt='Features Connected'
                        style='w-full h-full'
                    />
                </figure>
            </div>
        </section>
    );
};

FeaturesConnected.displayName = 'FeaturesConnected';
export default FeaturesConnected;
