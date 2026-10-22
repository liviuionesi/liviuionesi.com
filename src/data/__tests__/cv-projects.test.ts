import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(__dirname, '../../..');
const FILES = ['Lebenslauf_Liviu_Ionesi.md', 'Liviu_Ionesi-CV.md', 'src/data/Liviu_Ionesi-CV.md'];
const TITLES = ['liviuionesi.com', 'brevier.dev', 'karcher.liviuionesi.com', 'lmdb.dev'];

describe.each(FILES)('CV document %s', (file) => {
  const text = fs.readFileSync(path.join(ROOT, file), 'utf-8');

  it('names the four current projects in order', () => {
    const positions = TITLES.map((title) => text.indexOf(`# ${title}`));
    expect(positions.every((position) => position >= 0)).toBe(true);
    expect(positions).toEqual([...positions].sort((a, b) => a - b));
  });

  it('has no link to the old GitHub account or the old projects', () => {
    expect(text).not.toContain('pehlivanu');
    expect(text).not.toContain('Defense Asset Manager');
    expect(text).not.toContain('filmpire');
  });
});
