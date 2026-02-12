import type { ReactNode } from 'react';
import Footer from './Footer';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-black">
      {children}
      <Footer />
    </div>
  );
}
