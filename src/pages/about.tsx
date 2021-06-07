import React, { FC } from 'react';
import SEO from 'components/SEO';
import { graphql, Link, useStaticQuery } from 'gatsby';

import Layout from 'components/Layout';
import PageDate from 'components/PageDate';
import ExternalLink from 'components/ExternalLink';
import Titled from 'components/Titled';
import BoxedSection from 'components/BoxedSection';

const getExperience = () => {
  const start = new Date('2017-06-30T18:30:00.000Z');
  const now = new Date();

  const epoch = new Date(0);
  const epochDiff = new Date(now.getTime() - start.getTime());

  const years = epochDiff.getFullYear() - epoch.getFullYear();
  const months = epochDiff.getMonth() - epoch.getMonth();

  return `${years} years, ${months} months`;
};

const About: FC<{ location: Location }> = ({ location }) => {
  const data = useStaticQuery(pageQuery);
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={`${siteTitle} → About Me`}>
      <SEO title='About Me' keywords={[`jayant bhawal`, `frontend`, `javascript`, `react`, `typescript`, `gatsby`]} />
      <h1>Hello World!</h1>
      <PageDate>December 8, 2019</PageDate>
      <section>
        <p>Hi! I'm Jayant Bhawal, and here I'll talk a bit about who I am, and what I do.</p>
      </section>
      <BoxedSection>
        <h2>tl;dr</h2>
        <p>
          UI/UX developer. Super passionate. {getExperience()} years of XP in UI Web and still levelling up. React +
          Redux + TS + SCSS.
        </p>
      </BoxedSection>
      <section>
        <h2>Work</h2>
        <p>
          I'm a frontend developer, with <em>full-time</em> experience of a bit over {getExperience()}.
        </p>
        <p>
          During this time, I've worked with people like{' '}
          <ExternalLink to='https://github.com/achambers'>Aaron Chambers</ExternalLink>,{' '}
          <ExternalLink to='https://github.com/jgwhite'>Jamie White</ExternalLink>,{' '}
          <ExternalLink to='https://github.com/rohitpaulk'>Paul Kuruvilla</ExternalLink>, and for pretty long with{' '}
          <ExternalLink to='https://github.com/kashifrazzaqui'>Kashif Razzaqui</ExternalLink>, and{' '}
          <Titled
            title={
              'Chris Game, and Richard Livsey from the Kayako London team.\n\n' +
              'And some exceptionally skilled friends from here including Sherub Thakur, Dhruv Agarwal, Raghav Dua, etc.'
            }
          >
            so many more
          </Titled>
          .
        </p>
        <p>
          So far I've worked on quite a wide variety of things, from your everyday static site, to super data-intensive
          user interfaces, to stuff that is so far from the UI domain that I was basically a proper backend and dev-ops
          guy for that time being.
        </p>
        <p>
          I've pushed hard for <Titled title={'LogRocket, FullStory, Hotjar...\nOne at a time.'}>tools</Titled> that let
          us track user experience on my projects, and made excellent use of that data to fix annoyances and
          inconveniences that no one knew they could complain about.
          <br />
          <small>
            People actually complain way less than they should about UX issues and annoyances because they don't know
            their voices matter. I like to change that where I work.
          </small>
        </p>
        <p>
          I care deeply for a great user experience regardless of the platform, so the finer details of building layouts
          and the science of user interactions with interfaces is of paramount importance to me.
        </p>
        <p>
          If any of this sounds interesting, and you'd like to talk, you can{' '}
          <ExternalLink to={'https://twitter.com/jayantbhawal'}>tweet</ExternalLink> at me or{' '}
          <ExternalLink to={'mailto:bhawal.jayant@gmail.com'}>email</ExternalLink> me.
        </p>
      </section>
      <section>
        <p>
          But I'm not <em>"All work and no play"</em>. If you'd like to know what I do when I'm not working,{' '}
          <Link to={'/about-play'}>go here</Link>.
        </p>
      </section>
    </Layout>
  );
};

export default About;

export const pageQuery = graphql`
  query DefaultAboutQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
