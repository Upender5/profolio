import '../styles/globals.css'; 
import Navbar from '../components/Navbar'; 
import { ReactNode } from 'react';

export const metadata = {
  title: 'Profolio',
  description: 'Upender\'s Profolio - Showcase of Projects and Blog',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
