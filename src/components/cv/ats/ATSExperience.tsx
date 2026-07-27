'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Experience } from '@/types/data';

interface ATSExperienceProps {
  experience: Experience[];
  detailLevel: string;
  t: (key: string) => string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MarkdownUl = ({ ...props }: any) => (
  <ul className="my-2 list-disc space-y-1 pl-5" {...props} />
);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MarkdownLi = ({ ...props }: any) => <li className="pl-1" {...props} />;

export default function ATSExperience({
  experience,
  detailLevel,
  t,
}: Readonly<ATSExperienceProps>) {
  return (
    <section className="mb-8">
      <h2 className="mb-4 border-b border-gray-400 pb-1 text-xl font-bold uppercase">
        {t('cvProfessionalExperience')}
      </h2>
      <div className="space-y-6">
        {experience.map((job) => {
          let experienceContent = <p>{job.summary}</p>;
          if (detailLevel === 'detailed') {
            experienceContent = (
              <div className="prose prose-sm max-w-none text-black">
                <p className="mb-2 italic">{job.summary}</p>
                <ReactMarkdown components={{ ul: MarkdownUl, li: MarkdownLi }}>
                  {job.description}
                </ReactMarkdown>
                {job.tech && job.tech.length > 0 && (
                  <div className="mt-2 text-sm text-gray-800">
                    <strong>{t('techLabel')}</strong>{' '}
                    {job.tech.flatMap((t: { skills: string[] }) => t.skills).join(', ')}
                  </div>
                )}
              </div>
            );
          } else if (detailLevel === 'linkedin') {
            experienceContent = (
              <div className="prose prose-sm max-w-none text-black">
                <ReactMarkdown components={{ ul: MarkdownUl, li: MarkdownLi }}>
                  {job.linkedinDescription || job.summary}
                </ReactMarkdown>
              </div>
            );
          }

          return (
            <div key={job.id}>
              <div className="mb-1 flex items-baseline justify-between">
                <h3 className="text-base font-bold">{job.role}</h3>
                <span className="text-sm font-bold">{job.period}</span>
              </div>
              <div className="mb-2 flex items-baseline justify-between">
                <p className="text-sm font-semibold">{job.company}</p>
                <span className="text-sm">{job.locationType}</span>
              </div>
              <div className="text-justify text-sm leading-relaxed">{experienceContent}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
