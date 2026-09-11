import { auth } from '@/lib/auth';
import { resolveAdminAccess, type AdminAccess } from '@/lib/adminAccess';

export type { AdminAccess };

/**
 * The one e-mail address allowed to open the CV pages.
 *
 * `ADMIN_EMAIL` is server-only and preferred. `NEXT_PUBLIC_ADMIN_EMAIL` is the
 * fallback so existing setups keep working; it is also what the sidebar uses to
 * decide whether to show the CV button.
 */
export function adminEmail(): string | undefined {
  return process.env.ADMIN_EMAIL ?? process.env.NEXT_PUBLIC_ADMIN_EMAIL;
}

/**
 * Reads the session on the server and says whether this request may see the CV.
 *
 * Call this in a server component and return early when the answer is not
 * `authorized`. That way the CV never reaches the browser — not in the HTML,
 * not in the React payload. A check inside a client component cannot do this,
 * because the data is already sent before the check runs.
 */
export async function getAdminAccess(): Promise<AdminAccess> {
  const session = await auth();
  return resolveAdminAccess(session?.user?.email, adminEmail());
}
