import '../styles/globals.css';
import Navbar from '../components/Navbar';
import { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Kudurupaka Upender · Senior Node.js Developer',
    template: '%s',
  },
  description:
    'Senior Backend Developer with 4.3+ years building scalable Node.js, Express.js, and PostgreSQL systems — multi-tenant SaaS, RBAC, Redis, and event-driven architecture.',
  keywords: [
    'Node.js Developer',
    'Backend Engineer',
    'PostgreSQL',
    'Redis',
    'Microservices',
    'Kudurupaka Upender',
  ],
  authors: [{ name: 'Kudurupaka Upender' }],
  openGraph: {
    title: 'Kudurupaka Upender · Senior Node.js Developer',
    description:
      'Backend systems with real architecture — multi-tenant SaaS, event-driven workflows, and real-time pipelines.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0e1a',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
