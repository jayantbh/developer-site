import React, { FC } from 'react';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Bio from 'components/Bio';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import { rhythm, scale } from 'utils/typography';
import PageDate from 'components/PageDate';

type Props = {
  pageContext: any;
  data: any;
  location: Location;
};

const BlogPostTemplate: FC<Props> = ({ data, pageContext, location }) => {
  const post = data.mdx;
  const siteTitle = data.site.siteMetadata.title;
  const metaImg = data.allFile.nodes[0]?.publicURL;
  const oEmbed = data.oEmbed.nodes[0]?.publicURL;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={`${siteTitle} → Blog → Post`}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.desc || post.excerpt}
        image={metaImg}
        oEmbed={oEmbed}
        readingTime={post.timeToRead}
        publishDate={new Date(
          parseInt(post.frontmatter.timestamp, 10)
        ).toISOString()}
      />
      <h1>{post.frontmatter.title}</h1>
      <PageDate>{post.frontmatter.date}</PageDate>
      <MDXRenderer>{post.body}</MDXRenderer>
      <hr
        style={{
          marginTop: rhythm(1 / 4),
          marginBottom: rhythm(1),
        }}
      />
      <Bio />

      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li>
          {previous && (
            <Link to={'/blog' + previous.fields.slug} rel='prev'>
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={'/blog' + next.fields.slug} rel='next'>
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query($slug: String!, $metaImg: String!, $oEmbed: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        desc
        date(formatString: "MMMM DD, YYYY")
        timestamp: date(formatString: "x")
      }
      body
      timeToRead
    }
    allFile(
      filter: {
        sourceInstanceName: { eq: "seo-images" }
        publicURL: { glob: $metaImg }
      }
    ) {
      nodes {
        publicURL
      }
    }
    oEmbed: allFile(
      filter: {
        sourceInstanceName: { eq: "seo-oembed" }
        publicURL: { glob: $oEmbed }
      }
    ) {
      nodes {
        publicURL
      }
    }
  }
`;
