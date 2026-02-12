import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ExternalLink } from 'lucide-react';
import Breadcrumbs from '../layout/Breadcrumbs';

export default function MediaPage() {
  return (
    <>
      <Helmet>
        <title>Media & Publications - Adam Honig</title>
        <meta name="description" content="Adam Honig's media appearances, articles, and podcast episodes on B2B sales, AI, and entrepreneurship." />
        <link rel="canonical" href="https://adamhonig.com/media" />
        <meta property="og:title" content="Media & Publications - Adam Honig" />
        <meta property="og:description" content="Adam Honig's media appearances, articles, and podcast episodes on B2B sales, AI, and entrepreneurship." />
        <meta property="og:url" content="https://adamhonig.com/media" />
      </Helmet>
      <Breadcrumbs items={[
        { name: "Home", url: "https://adamhonig.com/" },
        { name: "Media", url: "https://adamhonig.com/media" },
      ]} />
      <div className="py-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="text-purple-200 hover:text-white mb-8 inline-flex items-center">
            ← Back to Home
          </Link>

          <div className="max-w-4xl mx-auto space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Featured Videos</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { id: '9HlYtghIXUU', title: 'The Future of Sales', desc: 'A discussion on how AI is transforming B2B sales' },
                  { id: 'EF4t87Bef3A', title: 'Sales Leadership in the Digital Age', desc: 'Insights on leading sales teams in today\'s digital environment' },
                  { id: '7eXoAsPPvm4', title: 'AI and the Future of Work', desc: 'Exploring how AI is reshaping workplace dynamics' },
                  { id: 'SW2fxdd2ZKs', title: 'Innovation in Sales Technology', desc: 'Discussing the latest trends in sales technology' },
                  { id: 'y8xu1ZP_NZo', title: 'Sales Process Optimization', desc: 'Strategies for improving sales efficiency and effectiveness' },
                  { id: 'Z5UKA-RruJw', title: 'Digital Transformation in Sales', desc: 'Navigating the digital evolution of sales processes' },
                ].map((video) => (
                  <div key={video.id} className="bg-black/30 backdrop-blur-lg rounded-xl p-4">
                    <div className="aspect-video mb-4">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        className="w-full h-full rounded-lg"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <h3 className="text-lg font-semibold text-purple-200 mb-2">{video.title}</h3>
                    <p className="text-sm text-purple-300 mb-4">{video.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Articles & Publications</h2>
              <div className="grid gap-6">
                {[
                  { title: 'Manufacturing is at a Turning Point', source: 'Forbes Technology Council', url: 'https://www.forbes.com/councils/forbestechcouncil/2024/04/05/manufacturing-is-at-a-turning-point/' },
                  { title: 'The Human Filter: Keeping Generative AI\'s Potential in Check', source: 'Advisorpedia', url: 'https://www.advisorpedia.com/viewpoints/the-human-filter-keeping-generative-ais-potential-in-check/' },
                  { title: 'Reasons Your Prospects Ghost on You', source: 'HubSpot Sales Blog', url: 'https://blog.hubspot.com/sales/reasons-your-prospects-ghost-on-you' },
                  { title: 'Gaining from Giving: The Law of Reciprocity', source: 'CustomerThink', url: 'https://customerthink.com/gaining-from-giving-the-law-of-reciprocity/' },
                ].map((article) => (
                  <div key={article.url} className="bg-black/30 backdrop-blur-lg rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-purple-200 mb-2">{article.title}</h3>
                    <p className="text-purple-300 mb-4">{article.source}</p>
                    <a
                      href={article.url}
                      className="text-purple-400 hover:text-white inline-flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read Article <ExternalLink className="ml-1 w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Podcast Appearances</h2>
              <div className="grid gap-6">
                <div className="bg-black/30 backdrop-blur-lg rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-purple-200 mb-2">The Fundable Founder</h3>
                  <p className="text-purple-300 mb-4">Discussing entrepreneurship and building fundable companies</p>
                  <a
                    href="https://soundcloud.com/thefundablefounder"
                    className="text-purple-400 hover:text-white inline-flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Listen to Episode <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
