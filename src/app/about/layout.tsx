import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Raj Palace & Convention',
  description: 'Learn about our journey, mission, and commitment to excellence at Raj Palace & Convention.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 