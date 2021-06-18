import React, { FC } from 'react';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

// @ts-ignore
import staticImage from '../assets/jayant_dev.png';

type Props = {
  description?: string;
  image?: string;
  lang?: string;
  meta?: any[];
  keywords?: string[];
  title: string;
  readingTime?: string;
  publishDate?: string;
};

const SEO: FC<Props> = ({
  description,
  image,
  lang = 'en',
  meta = [],
  keywords = [],
  title,
  readingTime,
  publishDate,
}) => {
  const data = useStaticQuery(detailsQuery);
  const baseUrl = data.site.siteMetadata.siteUrl;
  const metaDescription = description || data.site.siteMetadata.description;
  const metaImage = baseUrl + (image || staticImage);
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `author`,
          content: data.site.siteMetadata.author,
        },
        {
          property: `og:site_name`,
          content: data.site.siteMetadata.title,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: metaImage,
        },
        {
          property: `og:image:alt`,
          content: metaDescription,
        },
        {
          property: `og:image:width`,
          content: `1200`,
        },
        {
          property: `og:image:height`,
          content: `630`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: data.site.siteMetadata.author,
        },
        {
          name: `twitter:site`,
          content: '@jayantbh',
        },
        {
          name: `twitter:domain`,
          content: 'https://jayant.dev/blog',
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: metaImage,
        },
        {
          name: `twitter:image:src`,
          content: metaImage,
        },
      ]
        .concat(
          readingTime
            ? [
                {
                  name: `twitter:label1`,
                  content: `Written by`,
                },
                {
                  name: `twitter:data1`,
                  content: `Jayant Bhawal`,
                },
                {
                  name: `twitter:label2`,
                  content: `Reading time`,
                },
                {
                  name: `twitter:data2`,
                  content: `${readingTime} min read`,
                },
              ]
            : []
        )
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)
        .concat([
          {
            name: `robots`,
            content: `INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1`,
          },
          {
            name: `date`,
            content: publishDate,
          },
          {
            name: `publish_date`,
            content: publishDate,
          },
          {
            name: `search_date`,
            content: publishDate,
          },
          {
            name: `article:publisher`,
            content: data.site.siteMetadata.author,
          },
          {
            name: `article:published_time`,
            content: publishDate,
          },
        ])}
    />
  );
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        siteUrl
        title
        description
        author
      }
    }
  }
`;
