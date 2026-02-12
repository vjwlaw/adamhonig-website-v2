import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Share2, Download } from 'lucide-react';
import Breadcrumbs from '../layout/Breadcrumbs';

export default function ShmeggeggyReview() {
  const today = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <title>The Shmeggeggy Haggadah Review - The New York Times</title>
        <meta name="description" content="A review of The Shmeggeggy Haggadah 5785 - A Bitter Herb with a Sweet Kick." />
        <link rel="canonical" href="https://adamhonig.com/shmeggeggy/review" />
        <meta property="og:title" content="The Shmeggeggy Haggadah Review" />
        <meta property="og:description" content="A review of The Shmeggeggy Haggadah 5785 - A Bitter Herb with a Sweet Kick." />
        <meta property="og:url" content="https://adamhonig.com/shmeggeggy/review" />
      </Helmet>
      <Breadcrumbs items={[
        { name: "Home", url: "https://adamhonig.com/" },
        { name: "The Shmeggeggy Haggadah", url: "https://adamhonig.com/shmeggeggy" },
        { name: "Review", url: "https://adamhonig.com/shmeggeggy/review" },
      ]} />

      {/* Header */}
      <header className="border-b border-gray-300 py-3 sm:py-4">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex flex-col items-center gap-1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/77/The_New_York_Times_logo.png"
              alt="The New York Times"
              className="h-7 sm:h-8 w-auto mb-1"
            />
            <div className="h-px w-full max-w-[200px] bg-black"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 py-6 sm:py-8 flex-grow">
        <article className="prose prose-sm sm:prose-lg" itemScope itemType="https://schema.org/NewsArticle">
          {/* Article Header */}
          <div className="mb-6 sm:mb-8">
            <p className="text-xs sm:text-sm text-gray-500 mb-2">BOOK REVIEW</p>
            <h1 itemProp="headline" className="font-serif text-2xl sm:text-4xl mb-3 sm:mb-4 text-black">The Shmeggeggy Haggadah 5785: A Bitter Herb with a Sweet Kick</h1>
            <div className="flex items-center justify-between border-b border-gray-300 pb-3 sm:pb-4">
              <div>
                <p className="text-xs sm:text-sm text-gray-700">By Mordechai Rosenthal-Feldsteinbergstein</p>
                <p className="text-xs sm:text-sm text-gray-500">Senior Critic of Spiritual Satire</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">{today}</p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="/shmeggeggy/Shmeggeggy-Haggadah.pdf"
                  download
                  className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full transition-colors no-underline"
                >
                  <Download size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">Download PDF</span>
                </a>
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-gray-700">
                  <Share2 size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">Share</span>
                </button>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="font-serif leading-relaxed text-gray-900" itemProp="articleBody">
            <p className="text-lg sm:text-xl mb-4 sm:mb-6">Rarely does a religious text arrive with the chutzpah of a late-night comedian and the sacred reverence of someone who kind of remembers Hebrew school. The Shmeggeggy Haggadah—now in its 5785 edition—is not so much a guide to the Passover Seder as it is a divine roast of it.</p>

            <p className="mb-4 sm:mb-6">Sponsored by Maxwell House™ (because obviously), this haggadah reads like what might happen if Mel Brooks, Larry David, and your Aunt Sylvia co-authored the Torah over a fifth cup of wine. It's absurd, it's oddly poignant, and it's unapologetically Jewish—in the loudest, proudest, most neurotically joyful sense.</p>

            <p className="mb-4 sm:mb-6">From its origin story (featuring a jailed shepherd and Billy Joel—because why not?) to the reimagining of Moses as a dual citizen with anger issues, every page oozes with irreverent reverence. Affy Cohen, the unsung logistics hero of the Exodus, deserves his own spin-off. And the Ten Plagues? They now include "Unnecessary Tariffs" and "Mad Cow Disease," which honestly feel more relevant than lice.</p>

            <p className="mb-4 sm:mb-6">The text masterfully straddles the line between blasphemy and brilliance, offering blessings that are accurate enough to appease your bubbe and sarcastic enough to keep your teenage cousin off their phone—for at least 15 minutes.</p>

            <p className="mb-4 sm:mb-6">Yes, some traditionalists may scoff. But for the rest of us—those who crave matzah with meaning and a Maxwell House-branded wink—The Shmeggeggy Haggadah delivers. It's a seder-night spectacle for the devoutly unserious, a reminder that even freedom comes with a punchline.</p>

            <div className="border-t border-gray-300 pt-4 sm:pt-6 mt-6 sm:mt-8">
              <p className="font-bold mb-1 sm:mb-2">Rating: Four out of Four Cups of Wine</p>
              <p className="text-gray-600 italic text-sm sm:text-base">(Plus one for Elijah, if he ever shows up.)</p>
            </div>

            {/* Download CTA */}
            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 mt-8 sm:mt-12 text-center">
              <h3 className="font-serif text-xl sm:text-2xl mb-2">Ready to spice up your Seder?</h3>
              <p className="text-gray-600 mb-4">Download The Shmeggeggy Haggadah and make this Passover unforgettable.</p>
              <a
                href="/shmeggeggy/Shmeggeggy-Haggadah.pdf"
                download
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors no-underline"
              >
                <Download size={20} />
                <span className="font-medium">Download Your Copy Now</span>
              </a>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-300 py-4 mt-8">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs text-gray-500 text-center">
            This article was written by <Link to="/" className="text-blue-600 hover:text-blue-800 underline">Adam Honig</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
