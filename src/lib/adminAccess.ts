/**
 * Who may see the CV pages.
 *
 * - `authorized`   — signed in with the admin e-mail address.
 * - `signed-out`   — nobody is signed in.
 * - `forbidden`    — signed in, but with a different e-mail address.
 *
 * This module is pure (no session, no `process.env`) so both the server gate
 * and client components can use it, and so it can be unit tested.
 */
export type AdminAccess = 'authorized' | 'signed-out' | 'forbidden';

function normalize(email: string | null | undefined): string | null {
  const trimmed = email?.trim().toLowerCase();
  return trimmed || null;
}

/**
 * Compares the e-mail address of the current session against the allowed admin
 * e-mail address.
 *
 * It fails closed: when no admin e-mail address is configured, nobody is
 * authorized. Comparing the two values directly would return `true` when both
 * are `undefined`, which opens the page to everyone.
 */
export function resolveAdminAccess(
  sessionEmail: string | null | undefined,
  adminEmail: string | null | undefined
): AdminAccess {
  const user = normalize(sessionEmail);
  const admin = normalize(adminEmail);

  if (!user) return 'signed-out';
  if (!admin) return 'forbidden';
  return user === admin ? 'authorized' : 'forbidden';
}

/** Convenience wrapper for places that only need a yes/no answer. */
export function isAdminEmail(
  sessionEmail: string | null | undefined,
  adminEmail: string | null | undefined
): boolean {
  return resolveAdminAccess(sessionEmail, adminEmail) === 'authorized';
}
