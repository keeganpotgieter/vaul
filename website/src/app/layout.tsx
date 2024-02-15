import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>
      <body className="antialiased text-gray-900 bg-gray-50">
        <main vaul-drawer-wrapper="" className="bg-gray-50">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
