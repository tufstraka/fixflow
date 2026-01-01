import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/contexts/AuthContext';
import { Navigation } from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FixFlow - Automated Bug Bounties',
  description: 'Automated debugging bounty system powered by MNEE stablecoin',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <footer className="bg-gray-800 text-gray-400 py-8 mt-auto">
              <div className="max-w-7xl mx-auto px-4 text-center">
                <p>FixFlow — Automated Bug Bounties</p>
                <p className="text-sm mt-2">Powered by MNEE Stablecoin</p>
              </div>
            </footer>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}