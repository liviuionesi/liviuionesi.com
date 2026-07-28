import fs from 'node:fs';
import path from 'node:path';
import CVMarkdownClient from './CVMarkdownClient';

export const metadata = {
  title: 'CV',
};

export default async function CVMarkdownPage() {
  const filePath = path.join(process.cwd(), 'src/data/Liviu_Ionesi-CV.md');
  const markdownContent = fs.readFileSync(filePath, 'utf8');

  return <CVMarkdownClient content={markdownContent} />;
}
