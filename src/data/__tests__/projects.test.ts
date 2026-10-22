import { projects as de } from '../locales/de';
import { projects as en } from '../locales/en';
import { projects as fr } from '../locales/fr';
import { projects as ro } from '../locales/ro';

const TITLES = ['liviuionesi.com', 'brevier.dev', 'karcher.liviuionesi.com', 'lmdb.dev'];

describe.each([
  ['en', en],
  ['de', de],
  ['fr', fr],
  ['ro', ro],
])('projects (%s)', (_lang, projects) => {
  it('lists the four current projects in order', () => {
    expect(projects.map((p) => p.title)).toEqual(TITLES);
  });

  it('links only to public repositories of liviuionesi', () => {
    const urls = projects.map((p) => p.githubUrl);
    expect(urls).toEqual([
      'https://github.com/liviuionesi/liviuionesi.com',
      '',
      '',
      'https://github.com/liviuionesi/lmdb.dev',
    ]);
  });

  it('links each project to its live site', () => {
    expect(projects.map((p) => p.deployUrl)).toEqual([
      'https://liviuionesi.com',
      'https://www.brevier.dev',
      'https://karcher.liviuionesi.com',
      'https://lmdb.dev',
    ]);
  });
});
