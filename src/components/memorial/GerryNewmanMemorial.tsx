import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import MemorialLayout from './MemorialLayout';
import MemorialHeader from './MemorialHeader';
import MemorialFooter from './MemorialFooter';
import Breadcrumbs from '../layout/Breadcrumbs';

export default function GerryNewmanMemorial() {
  return (
    <MemorialLayout>
      <Helmet>
        <title>In Loving Memory - Geraldine Newman | 1920 - 2012</title>
        <meta name="description" content="A memorial tribute to Geraldine Newman (1920-2012) - celebrating the life of a beloved grandmother, traveler, and card game enthusiast." />
        <link rel="canonical" href="https://adamhonig.com/in-memory/gerry-newman" />
        <meta property="og:title" content="In Loving Memory - Geraldine Newman | 1920 - 2012" />
        <meta property="og:description" content="A memorial tribute to Geraldine Newman (1920-2012) - celebrating the life of a beloved grandmother, traveler, and card game enthusiast." />
        <meta property="og:image" content="/memorial/gerry/geraldine-newman.jpg" />
        <meta property="og:url" content="https://adamhonig.com/in-memory/gerry-newman" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="In Loving Memory - Geraldine Newman | 1920 - 2012" />
        <meta name="twitter:description" content="A memorial tribute to Geraldine Newman (1920-2012) - celebrating the life of a beloved grandmother, traveler, and card game enthusiast." />
        <meta name="twitter:image" content="/memorial/gerry/geraldine-newman.jpg" />
      </Helmet>

      <Breadcrumbs items={[
        { name: "Home", url: "/" },
        { name: "In Memory", url: "/in-memory/gerry-newman" },
        { name: "Geraldine Newman", url: "/in-memory/gerry-newman" },
      ]} />

      <MemorialHeader
        name="Geraldine Newman"
        years="1920 – 2012"
        backgroundImage="/memorial/gerry/geraldine-newman.jpg"
        publishedDate="May 9, 2012"
      />

      <section className="py-16 md:py-24">
        <div className="w-[90%] max-w-[800px] mx-auto px-4">
          <p className="mb-8">
            Sad to say, but my grandmother, Gerry Newman, passed away this afternoon, May 9th, 2012, 
            of complications resulting from being 92. Her maiden name was Geraldine Goldfeder.
          </p>

          <p className="mb-8">
            Even though Grandma, or G'ma as we called her, was in poor health for a while, it still comes 
            as a bit of a surprise and a shock to know that she is no longer with us. I think part of my 
            surprise comes from the fact that G'ma was sort of an eternal figure to me, having outlived both 
            my Mom, <Link to="/in-memory/celia-honig" className="text-rose-600 hover:text-rose-700">Celia Honig</Link> and 
            Dad, <Link to="/in-memory/alan-honig" className="text-rose-600 hover:text-rose-700">Alan Honig</Link>. Every year as we went to Florida, Grandma seemed a little weaker but since her 
            90th birthday party, G'ma and I would joke about the preparations for her 100th.
          </p>

          <figure className="my-16 text-center">
            <img src="/memorial/gerry/grandma-with-nol-and-adam.jpg" alt="Grandma with Nol and Adam" className="w-full h-auto rounded-lg shadow-md" loading="lazy" />
            <figcaption className="mt-4 text-stone-500 italic">Grandma with Nol and Adam</figcaption>
          </figure>

          <p className="mb-8">
            Nol and I grew up with Grandma as a very regular presence in our lives. Her husband, my 
            Grandpa Jack, died in 1970 when I was under 3 and Nol was not even 1. G'ma suffered from 
            depression on and off after Grandpa's death and she moved close by to where we were living 
            so that my folks — especially my Mom — could stay in close touch with her.
          </p>

          <p className="mb-8">
            When Grandma was well, she was our usual babysitter and traveled with us on many family 
            vacations. G'ma was always baking us hamentashen, rugelach and mandelbrodt.
          </p>

          <p className="mb-8">
            Her mandelbrodt (or "mandle bread" as we called it) looked nothing like the version in the 
            Wikipedia entry. It was basically a big — I'm talking pound cake-sized — chocolate chip cookie 
            creation that was sliced into pieces sort of like a biscotti. We thought that was the best thing 
            ever. I have her handwritten recipe for it. Perhaps we'll have some this weekend.
          </p>

          <figure className="my-16 text-center">
            <img src="/memorial/gerry/mandelbrot-recipe.jpg" alt="Grandma's handwritten Mandelbrot recipe" className="w-full h-auto rounded-lg shadow-md" loading="lazy" />
            <figcaption className="mt-4 text-stone-500 italic">Grandma's handwritten Mandelbrot recipe</figcaption>
          </figure>

          <p className="mb-8">
            Grandma loved to cook us exotic (to us) dishes like chicken fricassee, goulash with dumplings, 
            and her famous chopped liver recipe, which came out for Yom Kippur break fast like clockwork.
          </p>

          <p className="mb-8">
            During the summers, Nol and I would stay at G'ma's apartment in Northport, LI for the weekend 
            and see two or maybe four movies with her at the old ninety-nine cent Northport Cinema. It was 
            a short walk from Grandma's apartment and we would get candy and treats and have a great time. 
            I can't be sure, but I think we saw all of the "Herbie the Love Bug" movies there.
          </p>

          <figure className="my-16 text-center">
            <img src="/memorial/gerry/geraldine-and-jack-newman.jpg" alt="Geraldine and Jack Newman" className="w-full h-auto rounded-lg shadow-md" loading="lazy" />
            <figcaption className="mt-4 text-stone-500 italic">Geraldine and Jack Newman</figcaption>
          </figure>

          <p className="mb-8">
            Did you know that Grandma met my Grandfather while trying on a pair of shoes? At least that's 
            the story I heard. Jack was a shoe salesman, and like some storyline out of Sex and the City 
            (the Depression-Era version anyhow), Jack charmed Grandma into going out with him after getting 
            the sale.
          </p>

          <p className="mb-8">
            Or did you know that Grandma traveled to China on one of the first western tours of China? It's 
            true! Hard to imagine that not long after Nixon met with Mao, and the Chinese let in tourists, 
            there was Geraldine Newman of Northport, LI hanging out on the Great Wall.
          </p>

          <figure className="my-16 text-center">
            <img src="/memorial/gerry/veronica-and-grandma.jpg" alt="Veronica and Grandma" className="w-full h-auto rounded-lg shadow-md" loading="lazy" />
            <figcaption className="mt-4 text-stone-500 italic">Veronica and Grandma</figcaption>
          </figure>

          <p className="mb-8">
            Grandma loved to travel, and when she was 88 she took a cruise with an even older friend of the 
            Caribbean that stopped in St. Thomas while Veronica and I were honeymooning there. Naturally, we 
            hung out during her shore time. Her watch broke, and she was very impressed that Veronica 
            surprised her with a new one when it couldn't be fixed.
          </p>

          <figure className="my-16 text-center">
            <img src="/memorial/gerry/gerry-newman-and-friends.jpg" alt="Gerry having fun" className="w-full h-auto rounded-lg shadow-md" loading="lazy" />
            <figcaption className="mt-4 text-stone-500 italic">Gerry having fun</figcaption>
          </figure>

          <p className="mb-8">
            Needless to say, Grandma was crazy about the kids. Her great-grandkids, who called her "Grandma" 
            from an early age. I was constantly sending her photos and cards of the kids, and in her room at 
            the hospital and nursing home she proudly displayed them.
          </p>

          <p className="mb-8">
            I think G'ma moved to Century Village in West Palm Beach in the early 1990s. From time to time 
            as I've had business in Florida, I would often stop in on Grandma, take her out to dinner, perhaps 
            even subject a colleague or two to the visit.
          </p>

          <figure className="my-16 text-center">
            <img src="/memorial/gerry/gma-with-kids.jpg" alt="G'ma and her grandkids" className="w-full h-auto rounded-lg shadow-md" loading="lazy" />
            <figcaption className="mt-4 text-stone-500 italic">G'ma and her grandkids</figcaption>
          </figure>

          <p className="mb-8">
            Grandma's depression could be pretty debilitating, but when she was happy she could be life of 
            the party like in this photo of her with Hum, Stephen, and Nol. I seem to recall at least one 
            event where she spent most of the night dancing with Hum, much to his wife Heather's chagrin.
          </p>

          <p className="mb-8">
            Most of all, G'ma loved to play cards. She was a big gambler, often betting as much as one penny 
            per point of bridge or canasta. When she first moved to Century Village, she had a regular card 
            game — and a regular mahjong game.
          </p>

          <p className="mb-8">
            We played endless games of canasta with G'ma and our family when Nol and I were kids. Now, if you're 
            not familiar with canasta, it's a pretty complicated game. Deuces are wild, sevens or aces can be 
            really bad or really good, threes act as sort of a multiplier, and the whole darn game is sort of 
            about being able to "meld".
          </p>

          <p className="mb-8">
            Anyhow, here are Nol and I learning to play this 1950s card game when we're like 9 or 10 and G'ma 
            seems to be making the rules up as she went along.
          </p>

          <p className="mb-8">
            "Oh," she would say, "they've changed the rules. Joker canastas are now allowed."
          </p>

          <p className="mb-8">
            We were never sure who owned the rules, but we spent hours playing, talking, and hanging out over 
            this crazy game.
          </p>

          <p className="mb-8">
            In my mind, I think it's very likely that G'ma is rounding up a game right now. She's found some 
            ladies named Edith, Pearl, and Minna and she's getting them set on the latest rules of the game.
          </p>
        </div>
      </section>

      <MemorialFooter name="Geraldine Newman" years="1920 - 2012" />
    </MemorialLayout>
  );
}
