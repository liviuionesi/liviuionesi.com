import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
  callbacks: {
    signIn({ profile }) {
      // Google reports whether it has confirmed the address. Refuse anything
      // unconfirmed, so a session can never carry an e-mail address that the
      // CV gate would then compare against the admin address.
      return profile?.email_verified === true;
    },
  },
});
