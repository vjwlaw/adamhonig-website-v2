import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-black flex items-center justify-center px-4">
      <Helmet>
        <title>Page Not Found - Adam Honig</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-purple-200 mb-8">This page doesn't exist.</p>
        <Link
          to="/"
          className="inline-block bg-purple-600/30 hover:bg-purple-600/50 text-white px-6 py-3 rounded-lg transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
