/**
 * Who runs the site. The Impressum and the Datenschutzerklärung read these
 * values, so a change of address or email is made here and nowhere else.
 */
export const COMPANY = {
  /** Trade name of the business (Einzelunternehmen). */
  name: 'Liviu Ionesi Solutions',
  /** Owner, the person responsible under § 5 DDG. */
  owner: 'Liviu Ionesi',
  street: 'Freiwaldaustr. 39',
  postcode: '73230',
  city: 'Kirchheim unter Teck',
  email: 'kontakt@liviuionesi.com',
} as const;

/** The company that serves the pages. Its servers see every visitor's IP address. */
export const HOST = {
  name: 'Vercel Inc.',
  address: '440 N Barranca Ave #4133, Covina, CA 91723, USA',
} as const;
