import Link from 'next/link';
import type { LegalText } from '@/data/legal';

/** One language block: a heading, an intro and the sections. */
function LegalBlock({ lang, text }: { lang: 'de' | 'en'; text: LegalText }) {
  return (
    <section lang={lang} className="mb-16">
      <h1 className="font-outfit mb-2 text-3xl font-semibold">{text.title}</h1>
      <p className="mb-8 opacity-70">{text.intro}</p>
      {text.sections.map((section) => (
        <div key={section.title} className="mb-6">
          <h2 className="mb-1 text-lg font-semibold">{section.title}</h2>
          <p className="leading-relaxed whitespace-pre-line">{section.body}</p>
        </div>
      ))}
    </section>
  );
}

/** A legal page in German (binding) with an English version below it. */
export default function LegalPage({ de, en }: { de: LegalText; en: LegalText }) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <Link href="/" className="mb-8 inline-block text-sm opacity-70 hover:underline">
        ← liviuionesi.com
      </Link>
      <LegalBlock lang="de" text={de} />
      <LegalBlock lang="en" text={en} />
    </main>
  );
}
