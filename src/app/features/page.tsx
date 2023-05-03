import FeatureSC from '@/components/package/features';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Features',
};

export default function Page() {
    return <FeatureSC />;
}
