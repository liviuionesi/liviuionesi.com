/** Base name shared by every CV export. */
export const CV_FILE_BASE = 'Liviu_Ionesi-CV';

export interface CvFileNameOptions {
  /** Layout of the document, e.g. `ATS` or `MD`. Omit for the visual CV. */
  variant?: string;
  /** Language of the content, e.g. `de`. Always ends up in the name. */
  language: string;
  /**
   * Extra parts for options that change what the document contains, e.g.
   * `detailed` or `noprojects`. Falsy entries are dropped, so callers can pass
   * `showProjects || 'noprojects'` style expressions.
   */
  modifiers?: readonly (string | false | null | undefined)[];
}

/**
 * Builds the file name the browser suggests when the CV is printed or saved
 * as PDF.
 *
 * Every option that changes the content becomes part of the name, so two
 * different CVs never land on the same file:
 *
 *     cvFileName({ language: 'en' })                       // Liviu_Ionesi-CV-EN
 *     cvFileName({ variant: 'ATS', language: 'de' })       // Liviu_Ionesi-CV-ATS-DE
 *     cvFileName({ language: 'en', modifiers: ['detailed', 'noprojects'] })
 *     //                                                   Liviu_Ionesi-CV-EN-detailed-noprojects
 */
export function cvFileName({ variant, language, modifiers = [] }: CvFileNameOptions): string {
  const parts = [CV_FILE_BASE];

  if (variant) parts.push(variant);
  parts.push(language.toUpperCase());
  for (const modifier of modifiers) {
    if (modifier) parts.push(modifier);
  }

  return parts.join('-');
}
