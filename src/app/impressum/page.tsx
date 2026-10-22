import type { Metadata } from 'next';
import LegalPage from '@/components/legal/LegalPage';
import { IMPRESSUM } from '@/data/legal';

export const metadata: Metadata = {
  title: 'Impressum',
  alternates: { canonical: 'https://www.liviuionesi.com/impressum' },
};

export default function ImpressumPage() {
  return <LegalPage de={IMPRESSUM.de} en={IMPRESSUM.en} />;
}
