import { useState } from 'react';
import { Mail } from 'lucide-react';

export default function ContactButton() {
  const [revealed, setRevealed] = useState(false);
  const emailParts = ['ach', '@', 'adamhonig', '.', 'com'];

  return (
    <div className="inline-block">
      {revealed ? (
        <a
          href={`mailto:${emailParts.join('')}`}
          className="inline-flex items-center gap-2 bg-purple-600/20 hover:bg-purple-600/30 text-purple-200 hover:text-white px-4 py-3 rounded-lg transition-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail size={20} />
          {emailParts.join('')}
        </a>
      ) : (
        <button
          onClick={() => setRevealed(true)}
          className="inline-flex items-center gap-2 bg-purple-600/20 hover:bg-purple-600/30 text-purple-200 hover:text-white px-4 py-3 rounded-lg transition-all"
        >
          <Mail size={20} />
          Show Contact Info
        </button>
      )}
    </div>
  );
}
