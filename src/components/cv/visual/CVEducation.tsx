'use client';

import React from 'react';
import clsx from 'clsx';
import { LuBookOpen, LuExternalLink } from 'react-icons/lu';
import ReactMarkdown from 'react-markdown';
import { Education } from '@/types/data';

interface CVEducationProps {
  education: Education[];
  theme: string;
  detailLevel: string;
  t: (key: string) => string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MarkdownUl = ({ ...props }: any) => (
  <ul className="my-2 list-disc space-y-1 pl-5" {...props} />
);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MarkdownLi = ({ ...props }: any) => <li className="pl-1" {...props} />;

const getThemeClasses = (theme: string) => {
  const isIde = theme === 'ide';
  return {
    border: isIde ? 'border-ide-border' : 'border-gray-200',
    dot: isIde ? 'border-ide-bg bg-blue-600' : 'border-white bg-blue-600',
    title: isIde ? 'text-ide-text' : 'text-gray-900',
    subtitle: isIde ? 'text-gray-400' : 'text-gray-500',
    year: isIde ? 'bg-ide-activity-bar text-gray-400' : 'bg-gray-100 text-gray-500',
    text: isIde ? 'text-gray-300' : 'text-gray-700',
    grade: isIde ? 'text-gray-300' : 'text-gray-800',
  };
};

const CVEducationItem = ({
  edu,
  index,
  theme,
  detailLevel,
  t,
}: {
  edu: Education;
  index: number;
  theme: string;
  detailLevel: string;
  t: (key: string) => string;
}) => {
  const classes = getThemeClasses(theme);
  const showDetails = detailLevel === 'detailed' || detailLevel === 'linkedin';

  const content = (
    <div
      className={clsx(
        'cv-item relative border-l-2 pl-4',
        classes.border,
        index !== 0 && 'print-break-inside-avoid'
      )}
    >
      <div
        className={clsx(
          'absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full border-2',
          classes.dot
        )}
      ></div>
      <div className="mb-1 flex items-baseline justify-between">
        <h3 className={clsx('text-base font-bold', classes.title)}>
          {edu.degree}
          {edu.studyField && (
            <span className={clsx('ml-1 text-sm font-normal', classes.subtitle)}>
              — {edu.studyField}
            </span>
          )}
        </h3>
        <span className={clsx('shrink-0 rounded px-2 py-0.5 font-mono text-xs', classes.year)}>
          {edu.year}
        </span>
      </div>
      <div className="mb-1 flex items-baseline justify-between">
        <div className="text-sm font-semibold text-blue-700">
          {edu.url ? (
            <a
              href={edu.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-1 hover:underline"
            >
              {edu.school}
              <LuExternalLink size={10} className="inline opacity-50" />
            </a>
          ) : (
            edu.school
          )}
        </div>
        {edu.location && (
          <span className={clsx('text-sm font-normal', classes.subtitle)}>{edu.location}</span>
        )}
      </div>
      {showDetails && edu.grade && (
        <div className="mb-1">
          <span className={clsx('text-sm font-medium', classes.grade)}>
            {t('grade')}: {edu.grade}
          </span>
        </div>
      )}
      <div className={clsx('text-justify text-sm leading-relaxed', classes.text)}>
        {showDetails && edu.description && (
          <div className="prose prose-sm prose-blue dark:prose-invert max-w-none">
            <ReactMarkdown components={{ ul: MarkdownUl, li: MarkdownLi }}>
              {edu.description}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );

  if (index === 0) {
    return (
      <div className="print-break-inside-avoid">
        <div className={clsx('mb-4 flex items-center gap-2 border-b pb-2', classes.border)}>
          <LuBookOpen className="text-blue-600" size={20} />
          <h2 className={clsx('text-lg font-bold tracking-wide uppercase', classes.title)}>
            {t('education')}
          </h2>
        </div>
        {content}
      </div>
    );
  }

  return content;
};

export default function CVEducation({
  education,
  theme,
  detailLevel,
  t,
}: Readonly<CVEducationProps>) {
  return (
    <section className="cv-section">
      <div className="space-y-4">
        {education.map((edu, index) => (
          <CVEducationItem
            key={edu.id}
            edu={edu}
            index={index}
            theme={theme}
            detailLevel={detailLevel}
            t={t}
          />
        ))}
      </div>
    </section>
  );
}
