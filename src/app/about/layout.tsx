import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Raj Palace & Convention',
  description: 'Learn about Raj Palace & Convention - our history, mission, and values.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 