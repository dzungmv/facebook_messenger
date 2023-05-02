import Footer from '@/components/common/footer';
import Header from '@/components/common/header';
import HomeHero from './hero';

const HomeSC: React.FC = () => {
    return (
        <main className=''>
            <Header />
            <section className='pt-[100px] max-w-[1195px] mx-auto pb-[100px] w-full laptop:px-4 tablet:px-4'>
                <HomeHero />
            </section>
            <Footer />
        </main>
    );
};

export default HomeSC;
