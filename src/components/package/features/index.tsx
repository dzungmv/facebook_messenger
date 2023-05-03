import Footer from '@/components/common/footer';
import Header from '@/components/common/header';
import FeaturesConnected from './connected';
import FeaturesHero from './hero';
import FeaturesLanding from './landing';

const FeatureSC: React.FC = () => {
    return (
        <main className='pt-[100px]  overflow-hidden'>
            <Header />

            <section className=''>
                <FeaturesHero />
                <FeaturesConnected />
                <FeaturesLanding />
            </section>

            <Footer />
        </main>
    );
};

FeatureSC.displayName = 'FeatureSC';
export default FeatureSC;
