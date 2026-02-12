import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Linkedin, Youtube, Radio, HelpCircle } from 'lucide-react';
import ContactButton from './ContactButton';
import Breadcrumbs from '../layout/Breadcrumbs';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Adam Honig - Tech Entrepreneur & Speaker</title>
        <meta name="description" content="Tech entrepreneur, thought leader in B2B sales and AI. Founder & CEO of Spiro.ai, the anti-CRM CRM. Speaker and podcast host of Make It Move It Sell It." />
        <link rel="canonical" href="https://adamhonig.com/" />
        <link rel="preload" as="image" href="/adam-headshot-friendly.png" />
      </Helmet>
      <Breadcrumbs items={[{ name: "Home", url: "https://adamhonig.com/" }]} />
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="bg-black/30 backdrop-blur-lg rounded-3xl p-6 md:p-12 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 md:gap-8 mb-8">
              <div className="w-40 h-40 relative flex-shrink-0">
                <div className="absolute -inset-2 bg-purple-500/20 rounded-full blur-xl"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-purple-500/30 shadow-xl">
                  <img
                    src="/adam-headshot-friendly.png"
                    alt="Adam Honig"
                    width="160"
                    height="160"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Adam Honig
                </h1>
                <p className="text-purple-200 text-xl mb-6">
                  Software Chief Executive Officer | Board Member | Entrepreneur | Speaker
                </p>
                <ContactButton />
              </div>
            </div>

            <div className="mb-12">
              <div className="relative pb-[56.25%] rounded-xl overflow-hidden shadow-2xl border-2 border-purple-500/30">
                <iframe
                  src="https://www.youtube.com/embed/N8YMUOCb5RE?rel=0"
                  title="Adam Honig Speaking Highlights"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            <div className="space-y-6 text-purple-100 text-lg leading-relaxed">
              <p>
                Adam Honig is currently the Founder and CEO of{' '}
                <a
                  href="https://spiro.ai"
                  className="hover:text-white underline decoration-1 underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Spiro.ai
                </a>
                , the anti-CRM CRM, which was{' '}
                <a
                  href="https://www.linkedin.com/posts/adamhonig_well-the-big-news-is-that-spiroai-has-been-activity-7201948218677477376-kDRs/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAABL1sB-LpzSGVMQ9Ij_BqNT-PPpAemihw"
                  className="hover:text-white underline decoration-1 underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  purchased by Cordance
                </a>
                {' '}in 2024. Prior to Spiro, he founded{' '}
                <a
                  href="https://finance.yahoo.com/news/cloud-sherpas-acquires-innoveer-solutions-123000708.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAC7wTXjsW62TRw1ZbCANmeHRBv9SHSSbQKCm0imuFc_EXnpf8LUg3gfKi7spjl9zCsnc_DMZTj2BmspjRcA-hmNbxrwod6ZJbu3LzU63BOpee3amD8IZUaNcShGhLlhWrSLMDT2rTRYWAlOVi2eV94UyToUEurByz3xNLvin4YKm"
                  className="hover:text-white underline decoration-1 underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Innoveer Solutions
                </a>
                , growing it into one of the largest Salesforce.com consulting partners worldwide.
              </p>

              <p>
                A thought leader in B2B sales and AI, he hosts{' '}
                <a
                  href="https://open.spotify.com/show/21wCfML6rFv5ewmvTGzVBT?si=cd5dcd14f89b4b1d"
                  className="hover:text-white underline decoration-1 underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Make It Move It Sell It
                </a>
                {' '}and speaks at industry events.
              </p>

              <p>
                He lives in the Boston area with his family and enjoys traveling, drone photography and dreaming of being a late night talk show host.
              </p>

              <p>
                He is a graduate of Cornell University and a member of the{' '}
                <a
                  href="https://www.sealandserpent.org/"
                  className="hover:text-white underline decoration-1 underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Seal and Serpent Society
                </a>
                .
              </p>

              <div className="mt-8 pt-8 border-t border-purple-600/20">
                <h2 className="text-2xl font-semibold text-white mb-6">Featured Media & Publications</h2>
                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <Radio className="w-6 h-6 mt-1 text-purple-400 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-purple-200">
                        <Link to="/media" className="hover:text-white">
                          Guest Appearances & Articles →
                        </Link>
                      </h3>
                      <p className="text-purple-300">
                        Explore Adam's podcast appearances, articles, and thought leadership content
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Radio className="w-6 h-6 mt-1 text-purple-400 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-purple-200">
                        <Link to="/shmeggeggy" className="hover:text-white">
                          Author of the Shmeggeggy Haggadah →
                        </Link>
                      </h3>
                      <p className="text-purple-300">
                        A modern take on the traditional Passover Haggadah
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-6 h-6 mt-1 text-purple-400 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-purple-200">
                        <Link to="/faq" className="hover:text-white">
                          Frequently Asked Questions →
                        </Link>
                      </h3>
                      <p className="text-purple-300">
                        What I do, what I think about, and how to get in touch
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-6 mt-8 pt-8 border-t border-purple-600/20">
              <a
                href="https://www.linkedin.com/in/adamhonig"
                className="text-purple-200 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.youtube.com/channel/UC9_UG7vxLf_R6heFiwqjLSA"
                className="text-purple-200 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
