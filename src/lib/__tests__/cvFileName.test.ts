import { cvFileName, CV_FILE_BASE } from '@/lib/cvFileName';

describe('cvFileName', () => {
  it('always ends the base name with the language', () => {
    expect(cvFileName({ language: 'en' })).toBe(`${CV_FILE_BASE}-EN`);
    expect(cvFileName({ language: 'de' })).toBe(`${CV_FILE_BASE}-DE`);
  });

  it('puts the variant before the language', () => {
    expect(cvFileName({ variant: 'ATS', language: 'fr' })).toBe(`${CV_FILE_BASE}-ATS-FR`);
  });

  it('appends modifiers in order and drops falsy ones', () => {
    expect(
      cvFileName({
        language: 'ro',
        modifiers: ['detailed', false, 'noprojects', undefined, null, ''],
      })
    ).toBe(`${CV_FILE_BASE}-RO-detailed-noprojects`);
  });

  // The collision that used to happen: the German markdown CV and the English
  // visual CV both saved as `Liviu_Ionesi-CV`.
  it('gives the markdown CV and the visual CV different names', () => {
    expect(cvFileName({ variant: 'MD', language: 'de' })).not.toBe(cvFileName({ language: 'en' }));
  });

  it('gives each detail level its own name', () => {
    expect(cvFileName({ language: 'en', modifiers: ['detailed'] })).not.toBe(
      cvFileName({ language: 'en' })
    );
  });
});
