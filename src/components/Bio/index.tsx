import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

import { rhythm } from 'utils/typography';
import ExternalLink from 'components/ExternalLink';

const Bio = () => {
  const data = useStaticQuery(bioQuery);

  const { author, social } = data.site.siteMetadata;
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(1.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
      />
      <p>
        Built by{' '}
        <a
          rel='author'
          href='https://jayantbhawal.in'
          style={{ fontWeight: 'bold' }}
        >
          {author}
        </a>
        , who does stuff on the Web as a hobby.
        <br />
        <a href={`https://twitter.com/${social.twitter}`}>
          You should follow him on Twitter
        </a>{' '}
        or <ExternalLink to='https://github.com/jayantbh'>GitHub</ExternalLink>
      </p>
    </div>
  );
};

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`;

export default Bio;
