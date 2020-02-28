import React, { FC, HTMLAttributes } from 'react';
import SEO from 'components/SEO';
import { graphql, Link, useStaticQuery } from 'gatsby';

import Layout from 'components/Layout';
import PageDate from 'components/PageDate';
import ExternalLink from 'components/ExternalLink';
import Titled from 'components/Titled';
import BoxedSection from 'components/BoxedSection';
import steamIconUrl from 'assets/steam-icon.svg';

const SteamIcon = (props: HTMLAttributes<HTMLElement>) => <img {...props} src={steamIconUrl} alt='Steam Icon' />;

const AboutPlay: FC<{ location: Location }> = ({ location }) => {
  const data = useStaticQuery(pageQuery);
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={`${siteTitle} → About Me | Play`}>
      <SEO title='About Me | Play' keywords={[`jayant bhawal`, `gaming`, `food`, `burgers`, `steam`, `xbox`]} />
      <h1>Yo! 'Sup?</h1>
      <PageDate>December 8, 2019</PageDate>
      <section>
        <p>
          Hi! I'm Jayant, and I{' '}
          <ExternalLink to={'https://steamcommunity.com/id/jayantbh/'} CustomIcon={SteamIcon}>
            looove playing games
          </ExternalLink>{' '}
          (casually), and eating out.
        </p>
      </section>
      <BoxedSection>
        <h2>tl;dr</h2>
        <p>
          2500+ hours on Steam (many more elsewhere). Eat out ~ thrice a week. 4K Gaming PC + Xbox + PS, and PC VR. 12
          smart lights. 2 smart assistants.
        </p>
        <p>I can rank almost all the best burgers in Gurgaon.</p>
      </BoxedSection>
      <section>
        <h2>Play</h2>
        <p>
          I'm am what you'll call a <em>casual</em> gamer. I play a ton of different games, but nothing very little
          grinding, and no competitives.
        </p>
        <p>
          During this time, I've played with people like{' '}
          <ExternalLink to='https://steamcommunity.com/id/susobhang70' CustomIcon={SteamIcon}>
            <Titled title={'Data science prodigy, IIIT-H gold medalist'}>Susobhan Ghosh</Titled>
          </ExternalLink>
          ,{' '}
          <ExternalLink to='https://steamcommunity.com/id/jareddunn' CustomIcon={SteamIcon}>
            <Titled title={'Preparing for IAS. Knows more about our world than pretty much anyone else I know.'}>
              Soumajeet Basu
            </Titled>
          </ExternalLink>
          ,{' '}
          <ExternalLink to='https://steamcommunity.com/id/jaredwithaj' CustomIcon={SteamIcon}>
            <Titled
              title={'Data science engineer, and web application developer. Amazing at quickly picking up new stuff.'}
            >
              Ayush Shaw
            </Titled>
          </ExternalLink>
          , and quite a few more.
        </p>
        <p>
          There's hardly any genre of game that I've not played, except the Anime style ones. Not that I hate anime, I
          like a few of them,{' '}
          <Titled title={'Followed by Death Note, till L dies.'}>FullMetal Alchemist: Brotherhood</Titled> being my
          favorite one.
        </p>
        <p>
          Of course, like almost everyone out there, Witcher 3: The Wild Hunt is one of my all-time favorites, but
          Spider-Man PS4 has a special place in my heart. I'm a big Halo fan too, here's hoping Halo: Infinite is a
          crazy entry to the franchise. However, most of my playtime is in multiplayer games or game-modes, shouldn't be
          surprising I guess.
        </p>
        <p>
          I love going out to nice places to have a meal, how mainstream of me you might think{' '}
          <span role={'img'}>😛</span>. And there will always be a special place for <strong>Garlic Bread</strong> in my
          tummy, and heart (title of my autopsy report).
        </p>
        <p>
          If I seem like the kind of guy you want to chat or chill with, you can{' '}
          <ExternalLink to={'https://twitter.com/jayantbhawal'}>tweet</ExternalLink> at me or{' '}
          <ExternalLink to={'mailto:bhawal.jayant@gmail.com'}>email</ExternalLink> me, assuming you don't have my
          number.
        </p>
      </section>
      <section>
        <p>
          But I'm not <em>"slacking around like a lazy slob"</em> all day. If you'd like to know what I do for a living,{' '}
          <Link to={'/about'}>go here</Link>.
        </p>
      </section>
    </Layout>
  );
};

export default AboutPlay;

export const pageQuery = graphql`
  query DefaultAboutPlayQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
