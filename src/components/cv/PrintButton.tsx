'use client';

import React from 'react';
import clsx from 'clsx';

import { usePrintTitle } from '@/hooks/usePrintTitle';

const TONES = {
  blue: 'bg-blue-600 hover:bg-blue-700',
  black: 'bg-black hover:bg-gray-800',
} as const;

export interface PrintButtonProps {
  /** File name the browser should suggest, without the `.pdf` extension. */
  fileName: string;
  label: string;
  tone?: keyof typeof TONES;
}

/**
 * Floating print button, hidden in the printed output.
 *
 * It owns both halves of printing: the suggested file name and the click that
 * starts the print. Keeping them together means the three CV pages cannot drift
 * apart on how a CV is named.
 */
export default function PrintButton({
  fileName,
  label,
  tone = 'black',
}: Readonly<PrintButtonProps>) {
  const print = usePrintTitle(fileName);

  return (
    <div className="print-hidden fixed top-8 right-8 z-50">
      <button
        onClick={print}
        className={clsx(
          'flex transform items-center gap-2 rounded-md px-6 py-3 font-bold text-white shadow-xl transition-all hover:-translate-y-0.5',
          TONES[tone]
        )}
      >
        <span className="text-lg">🖨️</span> {label}
      </button>
    </div>
  );
}
