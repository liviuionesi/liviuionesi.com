'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { useLanguage } from '@/context/LanguageContext';
import PrintButton from '@/components/cv/PrintButton';
import { cvFileName } from '@/lib/cvFileName';
import '../cv/cv.css';

/**
 * Language of `src/data/Liviu_Ionesi-CV.md`. This route renders that one file
 * as-is, so the file name says `DE` no matter which language the site is set
 * to. Without it the German CV would download under the same name as the
 * English one from `/cv`.
 */
const MARKDOWN_CV_LANGUAGE = 'de';

export default function CVMarkdownClient({ content }: Readonly<{ content: string }>) {
  const { t } = useLanguage();

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
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content.trim()}</ReactMarkdown>
      </article>

      <PrintButton
        fileName={cvFileName({ variant: 'MD', language: MARKDOWN_CV_LANGUAGE })}
        label={t('downloadResume') || 'Print CV'}
      />
    </div>
  );
}
