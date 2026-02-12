import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import MemorialLayout from './MemorialLayout';
import MemorialHeader from './MemorialHeader';
import MemorialFooter from './MemorialFooter';
import Breadcrumbs from '../layout/Breadcrumbs';

export default function AlanHonigMemorial() {
  return (
    <MemorialLayout>
      <Helmet>
        <title>Remembering Alan Honig | 1942 - 2002</title>
        <meta name="description" content="A memorial tribute to Alan Honig, a beloved father, husband, and advertising executive from Huntington Bay, New York." />
        <link rel="canonical" href="https://adamhonig.com/in-memory/alan-honig" />
        <link rel="preload" as="image" href="/memorial/alan/top-image.jpg" />
        <meta property="og:title" content="Remembering Alan Honig | 1942 - 2002" />
        <meta property="og:description" content="A memorial tribute to Alan Honig, a beloved father, husband, and advertising executive from Huntington Bay, New York." />
        <meta property="og:image" content="/memorial/alan/top-image.jpg" />
        <meta property="og:url" content="https://adamhonig.com/in-memory/alan-honig" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Remembering Alan Honig | 1942 - 2002" />
        <meta name="twitter:description" content="A memorial tribute to Alan Honig, a beloved father, husband, and advertising executive from Huntington Bay, New York." />
        <meta name="twitter:image" content="/memorial/alan/top-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Remembering Alan Honig | 1942 - 2002",
          "description": "A memorial tribute to Alan Honig, a beloved father, husband, and advertising executive from Huntington Bay, New York.",
          "image": "https://adamhonig.com/memorial/alan/top-image.jpg",
          "datePublished": "2013-06-16",
          "author": { "@type": "Person", "name": "Adam Honig", "url": "https://adamhonig.com" },
          "publisher": { "@type": "Person", "name": "Adam Honig", "url": "https://adamhonig.com" },
          "mainEntityOfPage": "https://adamhonig.com/in-memory/alan-honig"
        })}</script>
      </Helmet>

      <Breadcrumbs items={[
        { name: "Home", url: "https://adamhonig.com/" },
        { name: "In Memory", url: "https://adamhonig.com/in-memory/alan-honig" },
        { name: "Alan Honig", url: "https://adamhonig.com/in-memory/alan-honig" },
      ]} />

      <MemorialHeader
        name="Remembering Alan Honig"
        years="1942 – 2002"
        backgroundImage="/memorial/alan/top-image.jpg"
        publishedDate="Originally published on June 16, 2013"
      />

      <section className="py-16 md:py-24">
        <div className="w-[90%] max-w-[800px] mx-auto px-4">
          <p className="text-lg italic mb-8" style={{ color: 'var(--color-accent)' }}>
            It being Father's Day today, Nol and my thoughts have been about Dad for a while. Nol and I wrote this together as part obituary, part remembrance, part therapy.
          </p>

          <p>
            Our father, Alan Honig was born in the Bronx and lived most of his life in Huntington Bay, New York. He passed away on December 20th, 2002. <Link to="/">Adam Honig Dot Com</Link> wasn't up and running back then, so no official obituary was published at the time.
          </p>

          <p>
            Dad was 60 when he died from complications resulting from cancer which he had been battling on and off for about ten years. Though he was a strong fighter through the whole ordeal, he was fortunate to feel no particular pain as a result of his illness. Sometimes it freaked him out how sick he was since he felt no effects of it whatsoever. Only from the treatment.
          </p>

          <p>
            It's hard not to think of parties and having fun when one thinks of Dad. He's the one who taught me the golden rule of dinner parties: don't serve dinner until everyone is at least half in the bag. He and my Mom would throw massive, elaborate surprise parties for each other that would sometimes feature parades, crazy costumes and certainly long nights.
          </p>

          <figure className="my-16 text-center">
            <img src="/memorial/alan/groucho.jpg" alt="Alan and Celia as Groucho and Harpo" className="w-full h-auto" loading="lazy" />
            <figcaption>Alan and Celia as Groucho and Harpo</figcaption>
          </figure>

          <p>
            Dad loved to go fishing. It's not clear to me how a Jewish boy from the Bronx develops this sort of love, but he sure had it. Nol and I grew up in Huntington Bay, Long Island and Dad had a boat that he couldn't wait to take out on the Long Island Sound each weekend and fish.
          </p>

          <figure className="my-16 text-center">
            <img src="/memorial/alan/alan-honig-celia-honig-adam-bar-mitzvah.jpg" alt="Alan Honig and Celia Honig with the author at his bar mitzvah in 1980" className="w-full h-auto" loading="lazy" />
            <figcaption>Alan Honig and Celia Honig with the author at his bar mitzvah in 1980</figcaption>
          </figure>

          <p>
            As adults, when Dad was just recovering from cancer, we took him down to North Carolina for a deep sea fishing expedition. He had a fantastic time. We spent half the time nauseous in the tiny cabin below deck.
          </p>

          <p>
            Alan could be very opinionated… unlike the rest of us.
          </p>

          <p>
            It was there that he met our Mom, <Link to="/in-memory/celia-honig">Celia Newman</Link>, who was working there as a secretary. The story, as I understand it, was that Celia was being pursued by quite a few men eager to marry, so Dad proposed on their third date. She must have liked his bold swagger.
          </p>

          <figure className="my-16 text-center">
            <img src="/memorial/alan/alan-honig-celia-honig-2009.jpg" alt="Alan and Celia Honig" className="w-full h-auto" loading="lazy" />
            <figcaption>Alan and Celia Honig</figcaption>
          </figure>

          <p>
            Dad was an ad man through and through. He worked his entire career in advertising and growing up we'd often watch TV, talk through the program, but watch the commercials with rapt attention.
          </p>

          <p>
            Probably Dad's most famous television commercial was for Gillette Foamy, which dared to ask the question "was Gillette Foamy thick and rich enough to stop this speeding roller coaster?" Previous Gillette Foamy commercials featured men shaving, but this series of spots broke new ground and ultimately won a CLIO award, the academy award of advertising:
          </p>

          <div className="my-16 w-full max-w-[800px] mx-auto" style={{ aspectRatio: '16/9', position: 'relative' }}>
            <iframe
              src="https://www.youtube.com/embed/XlE3MOUWt8E"
              title="Dad's Gillette Foamy Commercial"
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <p>
            Other notable achievement of his career include "inventing" the lymon for Sprite, launching Febreze, and creating award winning commercials for Harrison Goldin's successful run for New York's Comptroller.
          </p>

          <p>
            Dad would have turned 71 about ten days ago. Suddenly that doesn't seem so old. I know a lot of men still strong and vital at that age. Dad lost a lot of his 50's to cancer, and then died less than 6 months after his 60th birthday.
          </p>

          <figure className="my-16 text-center">
            <img src="/memorial/alan/alan-honig-40-th-birthday.jpg" alt="Alan Honig's 40th Birthday" className="w-full h-auto" loading="lazy" />
            <figcaption>Alan Honig at his surprise 40th birthday party</figcaption>
          </figure>

          <p>
            We didn't always get along; our mutual stubbornness kept us apart. Dad had a tendency to view me — and Nol in my view — as an extension of himself, not as a person in my own right. He was great at a party, or charming a friend, or pitching a client, but one on one wasn't his strength. I wanted him to understand me, to know me but for some reason I had trouble breaking through.
          </p>

          <p>
            Without the cancer, without dying, it's hard to imagine him not getting a bit more mellow in his old age. He would have loved rolling around on the floor with his grandkids, playing the childhood games that Nol and I loved to play with him. Games that Dad once explained to me would "allow you and your brother to get out your frustrations with me".
          </p>

          <p>
            It makes me sad to think that we weren't close in his final years, and I regret not trying harder. I know that I learned and took away so much from him — both positive and negative. Even though I was very angry with him for a long time after his death, but having a bit more perspective now, I wish the asshole* was around with us.
          </p>

          <p className="text-lg font-semibold mt-8">
            Happy Father's Day.
          </p>

          <p className="mt-8 text-sm" style={{ color: 'var(--color-muted)' }}>
            (*Asshole was one of Dad's favorite words, and was very common for his friends to call each other such.)
          </p>
        </div>
      </section>

      <MemorialFooter name="Alan Honig" years="1942 - 2002" />
    </MemorialLayout>
  );
}
