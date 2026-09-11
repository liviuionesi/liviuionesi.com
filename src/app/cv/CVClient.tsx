'use client';

import React, { useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import * as mockDataEn from '@/data/locales/en';
import * as mockDataRo from '@/data/locales/ro';
import * as mockDataDe from '@/data/locales/de';
import * as mockDataFr from '@/data/locales/fr';
import { translations } from '@/context/LanguageContext';
import { Language } from '@/types/context';
import clsx from 'clsx';
import './cv.css';

import CVHero from '@/components/cv/visual/CVHero';
import CVExperience from '@/components/cv/visual/CVExperience';
import CVEducation from '@/components/cv/visual/CVEducation';
import CVProjects from '@/components/cv/visual/CVProjects';
import CVLanguages from '@/components/cv/visual/CVLanguages';
import CVCertifications from '@/components/cv/visual/CVCertifications';
import PrintButton from '@/components/cv/PrintButton';
import { cvFileName } from '@/lib/cvFileName';

const DEFAULT_DETAIL = 'brief';
const DEFAULT_THEME = 'print';

function CVContent() {
  const searchParams = useSearchParams();
  const langParam = searchParams.get('lang');
  const detailLevel = searchParams.get('detail') || DEFAULT_DETAIL; // 'brief' | 'linkedin' | 'detailed'
  const showProjects = searchParams.get('projects') !== 'false'; // Default to true
  const showLanguages = searchParams.get('languages') !== 'false';
  const showCertifications = searchParams.get('certifications') !== 'false';
  const theme = searchParams.get('theme') || DEFAULT_THEME; // 'print' | 'ide'

  // Determine language from URL param or default to 'en'
  const language: Language =
    langParam === 'ro' || langParam === 'de' || langParam === 'fr' || langParam === 'en'
      ? langParam
      : 'en';

  // Every option that changes the content is part of the file name, so a brief
  // CV and a detailed one do not both save as the same PDF.
  const fileName = cvFileName({
    language,
    modifiers: [
      detailLevel !== DEFAULT_DETAIL && detailLevel,
      theme !== DEFAULT_THEME && theme,
      !showProjects && 'noprojects',
      !showLanguages && 'nolanguages',
      !showCertifications && 'nocerts',
    ],
  });

  // Select Data
  const data = useMemo(() => {
    switch (language) {
      case 'ro':
        return mockDataRo;
      case 'de':
        return mockDataDe;
      case 'fr':
        return mockDataFr;
      default:
        return mockDataEn;
    }
  }, [language]);

  // Translation Helper
  const t = (key: string) => {
    return translations[language]?.[key] || key;
  };

  const { linkedInProfile, experience, education, projects, about } = data;

  return (
    <div
      className={clsx(
        'cv-page-container mx-auto min-h-screen max-w-[210mm] print:mx-0 print:min-h-0 print:max-w-none',
        `theme-${theme}`
      )}
    >
      {/* HERO SECTION */}
      <CVHero
        linkedInProfile={linkedInProfile}
        about={about}
        theme={theme}
        detailLevel={detailLevel}
      />

      <div className="space-y-8 p-8 print:px-[15mm] print:py-4">
        {/* EXPERIENCE SECTION */}
        <CVExperience experience={experience} theme={theme} detailLevel={detailLevel} t={t} />

        <div className="space-y-8">
          {/* EDUCATION SECTION */}
          <CVEducation education={education} theme={theme} detailLevel={detailLevel} t={t} />
        </div>

        {showLanguages && <CVLanguages linkedInProfile={linkedInProfile} theme={theme} t={t} />}

        {showCertifications && (
          <CVCertifications linkedInProfile={linkedInProfile} theme={theme} t={t} />
        )}

        {/* PROJECTS SECTION */}
        {showProjects && <CVProjects projects={projects} theme={theme} t={t} />}
      </div>

      <PrintButton fileName={fileName} label={t('downloadResume')} tone="blue" />
    </div>
  );
}

export default function CVClient() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-gray-500">Loading CV...</div>}>
      <CVContent />
    </Suspense>
  );
}
