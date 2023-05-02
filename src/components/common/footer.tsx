import { meta_icon } from '../../../public';
import ImageC from './image';

const NAVS = [
    {
        title: 'Privacy Policy',
        href: 'https://www.facebook.com/privacy/policy',
    },
    {
        title: 'Cookie Policy',
        href: 'https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0',
    },
    {
        title: 'Terms',
        href: 'https://www.facebook.com/policies_center/',
    },
];

interface NavProps {
    title: string;
    href: string;
}

const Footer = () => {
    return (
        <footer>
            <div className='max-w-[1195px] mx-auto py-5 flex justify-between items-center laptop:px-4 tablet:px-4 tablet:flex-col-reverse'>
                <p className='text-sm tablet:mt-2'>
                    <span className='font-medium'> © Meta 2023.</span> The Apple
                    and Google Play logos are trademarks of their respective
                    owners.
                </p>

                <div className='flex items-center gap-3'>
                    <nav className='text-sm flex items-center gap-5'>
                        {NAVS.map((item: NavProps, index: number) => {
                            return (
                                <a
                                    href={item.href}
                                    key={index}
                                    target='_blank'
                                    className=' hover:cursor-pointer hover:underline'>
                                    {item.title}
                                </a>
                            );
                        })}
                    </nav>

                    <figure>
                        <ImageC src={meta_icon} alt='meta' style='w-[120px]' />
                    </figure>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
