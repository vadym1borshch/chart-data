import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import EntireWrapper from '@/components/EntireWrapper/EntireWrapper';
import { ReactNode } from 'react';
import MainLayout from '@/components/MainLayout/MainLayout';
import ProtectedRoute from '@/HOCs/ProtectedRoute/ProtectedRoute';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Data-Charts',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <EntireWrapper>
          <MainLayout>
            <ProtectedRoute>{children}</ProtectedRoute>
          </MainLayout>
        </EntireWrapper>
      </body>
    </html>
  );
}
