import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CV (ATS)',
  robots: {
    index: false,
    follow: false,
  },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
