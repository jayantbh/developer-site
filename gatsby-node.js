const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const fs = require('fs');

const { mdxToString } = require('./src/utils/mdx-to-string');
const {
  prepareSEOBrowser,
  renderImage,
  closeSEOBrowser,
} = require('./src/utils/seo-images');
const { createPagesQuery } = require('./src/constants');
const { siteMetadata } = require('./gatsby-config');
const { rel } = require('./src/utils/node');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const { browser, template, page } = await prepareSEOBrowser();

  try {
    fs.mkdirSync(rel('./seo-oembed'));
  } catch (e) {}

  const blogPost = path.resolve(`./src/templates/blog-post.tsx`);
  return graphql(createPagesQuery).then(async (result) => {
    if (result.errors) {
      throw result.errors;
    }

    const posts = result.data.allMdx.edges;

    for (let index = 0; index < posts.length; index++) {
      const post = posts[index];
      const { id } = post.node;

      const oEmbed = JSON.stringify(
        {
          version: '1.0',
          provider_name: siteMetadata.title,
          provider_url: siteMetadata.siteUrl,
          author_name: siteMetadata.author,
          author_url: siteMetadata.social.website,
          title: post.node.frontmatter.title,
          type: 'link',
          html: mdxToString(post.node.fileAbsolutePath),
        },
        null,
        '  '
      );

      try {
        fs.writeFileSync(rel(`./seo-oembed/${id}.json`), oEmbed);
      } catch (e) {}

      const previous =
        index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      await renderImage({ page, template, post });

      createPage({
        path: '/blog' + post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          metaImg: `**/${id}.png`,
          oEmbed: `**/${id}.json`,
          previous,
          next,
        },
      });
    }

    closeSEOBrowser({ browser });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
