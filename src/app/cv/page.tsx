import { getAdminAccess } from '@/lib/admin';
import CVAccessNotice from '@/components/cv/CVAccessNotice';
import CVClient from './CVClient';

/**
 * The gate runs on the server, before anything is rendered. An unauthorized
 * request gets the notice and nothing else — the CV is never put into the HTML
 * or the React payload.
 */
export default async function PrintableCVPage() {
  const access = await getAdminAccess();

  if (access !== 'authorized') {
    return <CVAccessNotice access={access} />;
  }

  return <CVClient />;
}
