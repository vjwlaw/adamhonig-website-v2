import type { ReactNode } from 'react';

export default function MemorialLayout({ children }: { children: ReactNode }) {
  return (
    <div className="memorial-theme">
      {children}
    </div>
  );
}
