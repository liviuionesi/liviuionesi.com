'use client';

import React from 'react';
import { signIn } from 'next-auth/react';

import { useLanguage } from '@/context/LanguageContext';
import type { AdminAccess } from '@/lib/adminAccess';

export interface CVAccessNoticeProps {
  /** Why access was refused. `authorized` never reaches this component. */
  access: Exclude<AdminAccess, 'authorized'>;
}

/**
 * Message shown instead of a CV when the visitor may not see it.
 *
 * The decision itself is made on the server (see `getAdminAccess`); this
 * component only renders the localized text, plus a sign-in button when nobody
 * is signed in.
 */
export default function CVAccessNotice({ access }: Readonly<CVAccessNoticeProps>) {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="rounded-lg bg-white p-8 text-center shadow-xl">
        <h1 className="mb-4 text-2xl font-bold text-red-600">{t('accessDenied')}</h1>
        <p className="text-gray-600">{t('pageProtected')}</p>
        <p className="mt-2 text-sm text-gray-500">{t('loginRequired')}</p>

        {access === 'signed-out' && (
          <button
            onClick={() => signIn('google')}
            className="mt-6 rounded-md bg-blue-600 px-5 py-2.5 font-bold text-white transition-colors hover:bg-blue-700"
          >
            {t('signInWithGoogle')}
          </button>
        )}
      </div>
    </div>
  );
}
