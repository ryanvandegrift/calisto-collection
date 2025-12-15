import type { Metadata } from 'next';
import Header from '@/components/layout/header';

export const metadata: Metadata = {
  title: 'Calisto Collection - Luxury Property Operations',
  description: 'Join the Calisto Collection. Hosting, Management, and Boutique programs for luxury properties.',
};

export default function CollectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
