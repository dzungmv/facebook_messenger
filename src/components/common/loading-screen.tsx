import { logo } from '../../../public';
import ImageC from './image';

const LoadingScreen = () => {
    return (
        <div className=' fixed top-0 left-0 bottom-0 right-0 fixed-[1000] flex items-center justify-center'>
            <figure className='w-16'>
                <ImageC src={logo} alt='logo' />
            </figure>

            <div className=' absolute bottom-4 left-0 right-0 flex items-center justify-center flex-col'>
                <p className='text-lg text-gray-500 font-medium -mb-1'>from</p>
                <h3 className=' text-center text-2xl text-transparent bg-messenger w-fit bg-clip-text font-medium'>
                    Messenger
                </h3>
            </div>
        </div>
    );
};

LoadingScreen.displayName = 'LoadingScreen';
export default LoadingScreen;
