'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import ReactMarkdown from 'react-markdown';
import { useLanguage } from '@/context/LanguageContext';
import '../cv/cv.css';

import remarkGfm from 'remark-gfm';

import { usePrintTitle } from '@/hooks/usePrintTitle';

export default function CVMarkdownClient({ content }: Readonly<{ content: string }>) {
  const { data: session, status } = useSession();
  const { t } = useLanguage();

  usePrintTitle('Liviu_Ionesi-CV');

  const isAuthorized = session?.user?.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL;

  if (status === 'loading') {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="text-gray-500">{t('authenticating')}</div>
      </div>
    );
  }

  if (!isAuthorized) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="rounded-lg bg-white p-8 text-center shadow-xl">
          <h1 className="mb-4 text-2xl font-bold text-red-600">{t('accessDenied')}</h1>
          <p className="text-gray-600">{t('pageProtected')}</p>
          <p className="mt-2 text-sm text-gray-500">{t('loginRequired')}</p>
        </div>
      </div>
    );
  }

  // Strip the trailing meta-commentary section (after the horizontal rule)
  const printableContent = content.split('\n---\n')[0].trim();

  return (
    <div className="ats-page-container mx-auto min-h-screen max-w-[210mm] bg-white px-16 py-12 text-black print:mx-0 print:min-h-0 print:max-w-none print:px-0 print:py-0">
      {/* Instructions banner — hidden in print */}
      <div className="print-hidden mb-8 rounded border border-blue-200 bg-blue-50 p-4 text-sm text-blue-800">
        <strong>Markdown Native CV</strong> — Direct render of the source document. ATS-friendly,
        clean typography, optimized for printing. Use{' '}
        <kbd className="rounded border border-blue-300 bg-white px-1.5 py-0.5 font-mono text-xs">
          Ctrl+P
        </kbd>{' '}
        to print or save as PDF.
      </div>

      <article className="prose prose-sm prose-headings:font-heading prose-headings:font-bold prose-headings:text-gray-900 prose-h1:mb-1 prose-h1:mt-2 prose-h1:text-3xl prose-h1:tracking-tight prose-h2:mb-2 prose-h2:mt-4 prose-h2:border-b-2 prose-h2:border-gray-200 prose-h2:pb-1 prose-h2:text-xl prose-h2:tracking-tight prose-h2:text-gray-800 prose-h3:mb-1 prose-h3:mt-3 prose-h3:text-lg prose-h3:font-semibold prose-h3:text-gray-800 prose-p:mb-2 prose-p:mt-1 prose-p:text-sm prose-p:leading-snug prose-p:text-gray-700 prose-strong:text-gray-900 prose-em:text-gray-500 prose-ul:my-1 prose-ul:pl-5 prose-li:my-0 prose-li:text-sm prose-li:leading-snug prose-li:text-gray-700 prose-hr:my-4 prose-hr:border-gray-300 print:prose-headings:text-black print:prose-p:text-black print:prose-li:text-black print:prose-strong:text-black print:prose-td:text-black prose-table:w-full prose-table:table-auto prose-td:p-1 prose-td:align-top prose-tr:border-none prose-td:border-none prose-td:text-sm max-w-none [&_thead]:hidden">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{printableContent}</ReactMarkdown>
      </article>

      {/* Print Button Overlay */}
      <div className="print-hidden fixed top-8 right-8 z-50">
        <button
          onClick={() => window.print()}
          className="flex transform items-center gap-2 rounded-md bg-black px-6 py-3 font-bold text-white shadow-xl transition-all hover:-translate-y-0.5 hover:bg-gray-800"
        >
          <span className="text-lg">🖨️</span> {t('downloadResume') || 'Print CV'}
        </button>
      </div>
    </div>
  );
}
