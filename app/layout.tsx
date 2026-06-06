import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
  title: 'Maynstayy - Admin Portal',
  description: 'Multi-hotel booking platform admin dashboard for India',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="app-layout">
          <Sidebar />
          <main className="main-content">
            <div className="page-wrapper">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
