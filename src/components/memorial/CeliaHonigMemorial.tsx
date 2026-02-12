import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import MemorialLayout from './MemorialLayout';
import MemorialFooter from './MemorialFooter';
import Breadcrumbs from '../layout/Breadcrumbs';

export default function CeliaHonigMemorial() {
  return (
    <MemorialLayout>
      <Helmet>
        <title>In Memory of Celia Honig</title>
        <meta name="description" content="Memorial page dedicated to Celia Honig (1944-2010), a beloved mother, artist, and entrepreneur who touched many lives with her warmth and creativity." />
        <link rel="canonical" href="https://adamhonig.com/in-memory/celia-honig" />
        <link rel="preload" as="image" href="/memorial/celia/celia-honig-in-1998.jpg" />
        <meta property="og:title" content="In Memory of Celia Honig" />
        <meta property="og:description" content="Remembering Celia Honig (1944-2010), a remarkable woman who brought joy and creativity to everyone around her." />
        <meta property="og:image" content="/memorial/celia/celia-honig-in-1998.jpg" />
        <meta property="og:url" content="https://adamhonig.com/in-memory/celia-honig" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="In Memory of Celia Honig" />
        <meta name="twitter:description" content="Remembering Celia Honig (1944-2010), a remarkable woman who brought joy and creativity to everyone around her." />
        <meta name="twitter:image" content="/memorial/celia/celia-honig-in-1998.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "In Memory of Celia Honig | 1944 - 2010",
          "description": "Memorial page dedicated to Celia Honig (1944-2010), a beloved mother, artist, and entrepreneur who touched many lives with her warmth and creativity.",
          "image": "https://adamhonig.com/memorial/celia/celia-honig-in-1998.jpg",
          "datePublished": "2010-01-17",
          "author": { "@type": "Person", "name": "Adam Honig", "url": "https://adamhonig.com" },
          "publisher": { "@type": "Person", "name": "Adam Honig", "url": "https://adamhonig.com" },
          "mainEntityOfPage": "https://adamhonig.com/in-memory/celia-honig"
        })}</script>
      </Helmet>

      <Breadcrumbs items={[
        { name: "Home", url: "https://adamhonig.com/" },
        { name: "In Memory", url: "https://adamhonig.com/in-memory/celia-honig" },
        { name: "Celia Honig", url: "https://adamhonig.com/in-memory/celia-honig" },
      ]} />

      <div className="max-w-[800px] mx-auto px-4">
        <main className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Hero image with overlay */}
          <figure className="relative my-8">
            <img
              src="/memorial/celia/celia-honig-in-1998.jpg"
              alt="Celia Honig in 1998"
              className="w-full h-auto rounded-lg"
            />
            <div
              className="absolute bottom-0 left-0 right-0 text-center px-4 pb-4 pt-8"
              style={{
                background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                borderRadius: '0 0 8px 8px',
              }}
            >
              <h1 className="text-2xl md:text-[2rem] font-bold text-white m-0" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)', fontFamily: 'var(--font-heading)' }}>
                In Loving Memory of Celia Honig
              </h1>
              <p className="text-white/90 mt-2 text-lg md:text-xl" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)', fontFamily: 'var(--font-heading)' }}>
                1944 - 2010
              </p>
            </div>
          </figure>

          <div className="mx-4 md:mx-auto max-w-[650px] mb-8">
            <p>My Mom, Celia Honig, died Sunday, January 17th, 2010. She was 65 and had been struggling with Alzheimer's Disease for about ten years.</p>

            <p>Though the disease made her final years difficult for her and our family, Mom had a tremendous amount of joy and love in her life and certainly lived her life to the fullest possible. She rarely complained and always told me that she was a 'happy person'.</p>
          </div>

          <div className="mx-4 md:mx-auto max-w-[650px] mb-8">
            <p>Celia was born in 1944 to Jack and <a href="https://gerrynewman.adamhonig.com" target="_blank" rel="noopener noreferrer">Geraldine Newman</a> in New York City. She grew up with her brother Harvey in Washington Heights and then later Douglaston, Queens. According to Karen Wasserman, one of her friends back then, "she was the prettiest, sweetest girl in the neighborhood." After high school, Celia attended classes at the Fashion Institute of Technology in Manhattan, but did not graduate.</p>

            <p>How her eventual husband, <Link to="/in-memory/alan-honig">Alan Honig</Link>, managed to date her and eventually marry her in 1964 is still a mystery. Celia and Alan moved to Long Island and had me in 1967 and Nol in 1970.</p>

            <p>For over twenty-five years, Celia lived in the Wincoma area of Huntington, New York, Long Island. Celia and Alan loved to travel, dance and enjoy hosting and attending parties.</p>
          </div>

          <figure className="my-8 max-w-[700px] mx-auto">
            <img
              src="/memorial/celia/celia-and-alan-honig-in-costume-e1526131710393.jpg"
              alt="Celia and Alan Honig in costume"
              className="w-full h-auto rounded-lg shadow-md"
              loading="lazy"
            />
            <figcaption>Celia and Alan at one of their many costume parties, embodying their love for life and celebration</figcaption>
          </figure>

          <div className="mx-4 md:mx-auto max-w-[650px] mb-8">
            <p>Celia started two entrepreneurial ventures. Her first business was arranging and selling dried flowers. Turns out that this was quite popular in the 1970's. Many years later she would start a cosmetics business called Color Theory Concepts. Mom used her artistic background to create custom shades of lipstick for her customers. Color Theory Concepts eventually expanded to selling all forms of cosmetics, handbags and accessories at the Gizay Michaels Salon. Color Theory Concepts operated until Mom moved to Manhattan in 2003.</p>

            <p>From her earliest days, Celia was quite artistic. She started studying painting and drawing in the 1970's, first under Mary Rose Palau and later under Lorianne Kulik. Mom's works were initially representational, focusing on still life, landscapes and portraits.</p>
          </div>

          {/* Art gallery */}
          <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 my-8 max-w-[700px] mx-auto">
            <figure className="w-full">
              <img
                src="/memorial/celia/peaches.jpg"
                alt="Celia Honig painting of peaches"
                className="w-full h-auto rounded-lg shadow-md"
                loading="lazy"
              />
              <figcaption>One of Celia's early still life works - Peaches in Natural Light</figcaption>
            </figure>
            <figure className="w-full">
              <img
                src="/memorial/celia/abstract.jpg"
                alt="Abstract painting by Celia Honig"
                className="w-full h-auto rounded-lg shadow-md"
                loading="lazy"
              />
              <figcaption>Later abstract work showing her evolution as an artist</figcaption>
            </figure>
          </div>

          <div className="mx-4 md:mx-auto max-w-[650px] mb-8">
            <p>Over time her work became progressively abstract with an emphasis on color over form. Mom had numerous shows around Long Island and her work is in private collections in the US and abroad.</p>

            <p>After my father's death in late 2002, Celia realized her dream of moving back into New York City, where she lived with her dog Lucky. When she was able she took classes and enjoyed programs at the 92nd Street Y, Broadway shows and galleries around the city.</p>
          </div>

          <figure className="my-8 max-w-[700px] mx-auto">
            <img
              src="/memorial/celia/celia-and-adam-honig.jpg"
              alt="Celia and Adam Honig in 2004"
              className="w-full h-auto rounded-lg shadow-md"
              loading="lazy"
            />
            <figcaption>A cherished moment with my mom in 2004</figcaption>
          </figure>

          <div className="mx-4 md:mx-auto max-w-[650px] mb-8">
            <p>When I think of my Mom, I often think of all the things I learned from her. She taught me to drive, to enjoy David Bowie's music, and to cook. She advised me on girls — not that I listened well enough. We spent days, hours at The Metropolitan Museum, where Mom was my art history professor. We walked all over Manhattan on Sundays while Nol was rehearsing or performing with the Metropolitan Opera Company. She took me to visit Cornell University where her cousin had attended and advised me to apply early decision.</p>

            <p>For Mom, the most fun was always sitting down and having a cup of coffee and really catching up. She was an excellent listener.</p>

            <p>In the end, that is the most important thing I learned from her: really how to listen and connect with people. Most people seem to listen as if it is the polite thing to do before talking again. Mom listened because she really wanted to know, to truly understand where you were coming from, to connect.</p>

            <p>Celia was always the person that you could call up and just talk to. No problem was too big or small; she had a large well of patience, and she gave wise counsel. This is what I miss the most. God, it sucks to have lost her so young.</p>
          </div>

          <figure className="my-8 max-w-[700px] mx-auto">
            <img
              src="/memorial/celia/celia-and-alan-honig.jpg"
              alt="Celia and Alan the way they are in my mind forever"
              className="w-full h-auto rounded-lg shadow-md"
              loading="lazy"
            />
            <figcaption>Celia and Alan in their prime - forever young in our memories</figcaption>
          </figure>

          <div className="mx-4 md:mx-auto max-w-[650px] mb-16">
            <p>Now that they're gone, I'm not going to focus on the lost, last so many years. In my mind, Alan and Celia are young, strong and unencumbered by disease.</p>

            <p>The consensus, first suggested to me by my cousin Amy, is that Celia and Alan, wherever they are right now, are having a drink, probably a smoke, and getting ready to dance.</p>
          </div>
        </main>
      </div>

      <MemorialFooter name="Celia Honig" years="1944 - 2010" closingText="Forever in our hearts" />
    </MemorialLayout>
  );
}
