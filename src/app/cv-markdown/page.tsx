import fs from 'node:fs';
import path from 'node:path';

import { getAdminAccess } from '@/lib/admin';
import CVAccessNotice from '@/components/cv/CVAccessNotice';
import CVMarkdownClient from './CVMarkdownClient';

export const metadata = {
  title: 'CV (Markdown)',
  robots: {
    index: false,
    follow: false,
  },
};

export default async function CVMarkdownPage() {
  // Gate first, read the file second. The markdown holds the full CV including
  // the home address and phone number, and anything passed to the client
  // component ends up in the page source.
  const access = await getAdminAccess();

  if (access !== 'authorized') {
    return <CVAccessNotice access={access} />;
  }

  const filePath = path.join(process.cwd(), 'src/data/Liviu_Ionesi-CV.md');
  const markdownContent = fs.readFileSync(filePath, 'utf8');

  return <CVMarkdownClient content={markdownContent} />;
}
