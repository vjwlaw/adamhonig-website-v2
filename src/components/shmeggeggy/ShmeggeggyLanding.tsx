import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Download } from 'lucide-react';
import Breadcrumbs from '../layout/Breadcrumbs';

interface Quote {
  text: string;
  author: string;
  title: string;
}

const quotes: Quote[] = [
  {
    text: "A sacred text for the spiritually perplexed and the emotionally overcaffeinated.",
    author: "Rabbi Herschel Plotzman",
    title: "Senior Fellow at the Institute for Mildly Heretical Liturgy"
  },
  {
    text: "The Schmeggeggy Haggadah brings the Exodus story to life with a level of sarcasm not seen since the original Israelites complained about the manna.",
    author: "Dr. Goldie Feinstein-Mandelbrot",
    title: "Chair of Seder Studies at Brooklyn College of Slightly Irreverent Judaica"
  },
  {
    text: "When I read it, I wept. Possibly from laughter. Possibly from the horseradish. Who can say?",
    author: "Rabbi Saul \"Sauly\" Greenbaum",
    title: "Emeritus Cantor of the Shul of Uncertain Relevance"
  },
  {
    text: "Finally—a Haggadah that asks not just the Four Questions, but the important fifth one: 'Can we eat already?'",
    author: "Professor Rena Kugelstein",
    title: "Author of Gefilte and Other Emotional Fish: A Cultural Memoir"
  },
  {
    text: "A stunning reinterpretation of our sacred narrative—especially the part where Moses threatens to turn the Wi-Fi off if no one helps with the dishes.",
    author: "Rabbi Morty Feldblatt",
    title: "Host of the podcast Oy Vey and Amen: Modern Torah for Modern Kvetches"
  },
  {
    text: "Reading the Schmeggeggy Haggadah was a transformational experience. I've never laughed so hard while learning absolutely nothing.",
    author: "Rabbi Judith Schnitzelstein",
    title: "Visiting Lecturer in Snarkology at Yeshiva University of Subtle Shade"
  }
];

export default function ShmeggeggyLanding() {
  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>The Shmeggeggy Haggadah 5785 - A Modern Passover Experience</title>
        <meta name="description" content="A hilarious and irreverent take on the traditional Passover Haggadah. Download now and make your Seder unforgettable!" />
        <link rel="canonical" href="https://adamhonig.com/shmeggeggy" />
        <meta property="og:title" content="The Shmeggeggy Haggadah 5785 - A Modern Passover Experience" />
        <meta property="og:description" content="A hilarious and irreverent take on the traditional Passover Haggadah. Download now and make your Seder unforgettable!" />
        <meta property="og:image" content="/shmeggeggy/laughing-rabbi.png" />
        <meta property="og:url" content="https://adamhonig.com/shmeggeggy" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Shmeggeggy Haggadah 5785" />
        <meta name="twitter:description" content="A hilarious and irreverent take on the traditional Passover Haggadah" />
        <meta name="twitter:image" content="/shmeggeggy/laughing-rabbi.png" />
      </Helmet>

      <Breadcrumbs items={[
        { name: "Home", url: "https://adamhonig.com/" },
        { name: "The Shmeggeggy Haggadah", url: "https://adamhonig.com/shmeggeggy" },
      ]} />
      <div className="max-w-7xl mx-auto">
        {/* NYT Review Link and Quote */}
        <div className="text-center mb-12">
          <Link to="/shmeggeggy/review" className="text-blue-400 hover:text-blue-300 underline mb-4 inline-block">
            Read the Full New York Times Review
          </Link>
          <blockquote className="text-lg sm:text-xl md:text-2xl font-serif italic text-white mb-2 mt-4">
            "The Shmeggeggy Haggadah is not so much a guide to the Passover Seder as it is a divine roast of it."
          </blockquote>
          <p className="text-gray-400">— The New York Times</p>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            The Shmeggeggy Haggadah 5785
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300">
            Where tradition meets comedy, and matzah meets its match
          </p>
        </div>

        {/* Main content with 3x3 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {/* First three quotes */}
          {quotes.slice(0, 3).map((quote, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-200"
            >
              <blockquote className="text-white">
                <p className="text-base mb-3 font-serif italic">"{quote.text}"</p>
                <footer className="text-gray-300">
                  <p className="font-semibold">— {quote.author}</p>
                  <p className="text-sm">{quote.title}</p>
                </footer>
              </blockquote>
            </div>
          ))}

          {/* Middle row with ads and image */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <div className="text-white text-center">
              <h3 className="text-xl font-serif mb-3">Early Bird Special!</h3>
              <p className="text-gray-300 mb-4">Order now and receive a complimentary "My Seder Survived 5785" commemorative wine stain!</p>
              <a
                href="/shmeggeggy/Shmeggeggy-Haggadah.pdf"
                download
                className="inline-flex items-center px-5 py-3 bg-blue-500 text-white rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors"
              >
                <Download className="mr-2 h-4 w-4" />
                Get Your Copy
              </a>
            </div>
          </div>

          {/* Center image */}
          <div className="flex justify-center items-center">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
              <img
                src="/shmeggeggy/laughing-rabbi.png"
                alt="Laughing Rabbi"
                className="rounded-full shadow-2xl"
              />
            </div>
          </div>

          {/* Second ad */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <div className="text-white text-center">
              <h3 className="text-xl font-serif mb-3">Group Discount!</h3>
              <p className="text-gray-300 mb-4">Buy 10 copies, get one free plague of your choice! Terms and conditions apply.</p>
              <a
                href="/shmeggeggy/Shmeggeggy-Haggadah.pdf"
                download
                className="inline-flex items-center px-5 py-3 bg-blue-500 text-white rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors"
              >
                <Download className="mr-2 h-4 w-4" />
                Bulk Order
              </a>
            </div>
          </div>

          {/* Last three quotes */}
          {quotes.slice(3).map((quote, index) => (
            <div
              key={index + 3}
              className="bg-gray-800 p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-200"
            >
              <blockquote className="text-white">
                <p className="text-base mb-3 font-serif italic">"{quote.text}"</p>
                <footer className="text-gray-300">
                  <p className="font-semibold">— {quote.author}</p>
                  <p className="text-sm">{quote.title}</p>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
              Ready to Revolutionize Your Seder?
            </h2>
            <p className="text-gray-300 mb-8">
              Download The Shmeggeggy Haggadah and make this Passover unforgettable.
              Guaranteed to generate more laughs than your Uncle Moishe's "Why did the matzah cross the road?" joke.
            </p>
            <a
              href="/shmeggeggy/Shmeggeggy-Haggadah.pdf"
              download
              className="inline-flex items-center px-8 py-4 bg-blue-500 text-white rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors shadow-lg"
            >
              <Download className="mr-2" />
              Download Your Copy Now
            </a>
          </div>
        </div>

        {/* Back to main site */}
        <div className="mt-8 text-center">
          <Link to="/" className="text-gray-500 hover:text-gray-300 text-sm">
            ← adamhonig.com
          </Link>
        </div>
      </div>
    </div>
  );
}
