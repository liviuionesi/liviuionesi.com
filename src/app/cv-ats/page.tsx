import { getAdminAccess } from '@/lib/admin';
import CVAccessNotice from '@/components/cv/CVAccessNotice';
import ATSClient from './ATSClient';

/** Server-side gate — see the comment in `src/app/cv/page.tsx`. */
export default async function ATSPrintableCVPage() {
  const access = await getAdminAccess();

  if (access !== 'authorized') {
    return <CVAccessNotice access={access} />;
  }

  return <ATSClient />;
}
