import { Link } from 'react-router-dom';

interface MemorialFooterProps {
  name: string;
  years: string;
  closingText?: string;
}

export default function MemorialFooter({ name, years, closingText }: MemorialFooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="text-center text-white py-8 mt-16"
      style={{ backgroundColor: 'var(--color-heading)' }}
    >
      {closingText ? (
        <p className="my-2 italic" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-accent)' }}>
          {closingText}
        </p>
      ) : (
        <>
          <p className="my-2">In loving memory of {name}. {years}.</p>
          <p className="mt-4 text-xs opacity-70">&copy; {currentYear} - Family of {name}</p>
        </>
      )}
      <p className="mt-6">
        <Link to="/" className="text-xs text-white/40 hover:text-white/70 transition-colors no-underline" style={{ borderBottom: 'none' }}>
          adamhonig.com
        </Link>
      </p>
    </footer>
  );
}
