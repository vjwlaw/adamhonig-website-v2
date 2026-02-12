import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-6 text-center">
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 px-4 text-xs sm:text-sm text-purple-300/60">
        <Link to="/in-memory/alan-honig" className="hover:text-purple-200/60 transition-colors">
          In memory of Alan Honig
        </Link>
        <span>&middot;</span>
        <Link to="/in-memory/celia-honig" className="hover:text-purple-200/60 transition-colors">
          In memory of Celia Honig
        </Link>
        <span>&middot;</span>
        <a href="https://gerrynewman.adamhonig.com" className="hover:text-purple-200/60 transition-colors" target="_blank" rel="noopener noreferrer">
          In memory of Geraldine Newman
        </a>
      </div>
    </footer>
  );
}
