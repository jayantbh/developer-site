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
};

const SEO: FC<Props> = ({
  description,
  image,
  lang = 'en',
  meta = [],
  keywords = [],
  title,
}) => {
  const data = useStaticQuery(detailsQuery);
  const metaDescription = description || data.site.siteMetadata.description;
  const metaImage = image || staticImage;
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
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: data.site.siteMetadata.author,
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
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    />
  );
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
