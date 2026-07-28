import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CV',
  robots: {
    index: false,
    follow: false,
  },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
