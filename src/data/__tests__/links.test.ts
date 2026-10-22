import fs from 'node:fs';
import path from 'node:path';

const SRC = path.resolve(__dirname, '../..');
const OLD_HANDLES = ['liviu-ionesi', 'pehlivanu'];

/** Lists every file under `dir`, except test folders. */
function sourceFiles(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return entry.name === '__tests__' ? [] : sourceFiles(full);
    return [full];
  });
}

describe('profile links', () => {
  it.each(OLD_HANDLES)('no file under src/ uses the old handle %s', (handle) => {
    const hits = sourceFiles(SRC)
      .filter((file) => /\.(ts|tsx|md|json)$/.test(file))
      .filter((file) => fs.readFileSync(file, 'utf-8').includes(handle))
      .map((file) => path.relative(SRC, file));
    expect(hits).toEqual([]);
  });
});
