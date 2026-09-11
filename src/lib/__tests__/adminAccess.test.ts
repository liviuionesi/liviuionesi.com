import { resolveAdminAccess, isAdminEmail } from '@/lib/adminAccess';

describe('resolveAdminAccess', () => {
  it('authorizes the configured admin address', () => {
    expect(resolveAdminAccess('admin@example.com', 'admin@example.com')).toBe('authorized');
  });

  it('ignores case and surrounding spaces', () => {
    expect(resolveAdminAccess('  Admin@Example.com ', 'admin@example.com')).toBe('authorized');
  });

  it('refuses a different signed-in address', () => {
    expect(resolveAdminAccess('someone@example.com', 'admin@example.com')).toBe('forbidden');
  });

  it('reports a missing session as signed-out', () => {
    expect(resolveAdminAccess(undefined, 'admin@example.com')).toBe('signed-out');
    expect(resolveAdminAccess(null, 'admin@example.com')).toBe('signed-out');
    expect(resolveAdminAccess('', 'admin@example.com')).toBe('signed-out');
  });

  // The bug this guards against: `session?.user?.email === process.env.ADMIN_EMAIL`
  // is `undefined === undefined`, so a missing config used to let everyone in.
  it('fails closed when no admin address is configured', () => {
    expect(resolveAdminAccess(undefined, undefined)).toBe('signed-out');
    expect(resolveAdminAccess('someone@example.com', undefined)).toBe('forbidden');
    expect(resolveAdminAccess('someone@example.com', '')).toBe('forbidden');
    expect(resolveAdminAccess('someone@example.com', '   ')).toBe('forbidden');
  });
});

describe('isAdminEmail', () => {
  it('is true only for the admin address', () => {
    expect(isAdminEmail('admin@example.com', 'admin@example.com')).toBe(true);
    expect(isAdminEmail('someone@example.com', 'admin@example.com')).toBe(false);
    expect(isAdminEmail(undefined, undefined)).toBe(false);
  });
});
