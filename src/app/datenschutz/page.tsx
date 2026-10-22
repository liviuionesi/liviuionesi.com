import type { Metadata } from 'next';
import LegalPage from '@/components/legal/LegalPage';
import { DATENSCHUTZ } from '@/data/legal';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  alternates: { canonical: 'https://liviuionesi.com/datenschutz' },
};

export default function DatenschutzPage() {
  return <LegalPage de={DATENSCHUTZ.de} en={DATENSCHUTZ.en} />;
}
