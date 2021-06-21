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

const last = (arr) => arr[arr.length - 1];

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const { browser, template, page } = await prepareSEOBrowser();

  try {
    fs.mkdirSync(rel('./seo-oembed'));
  } catch (e) {}

  const blogPost = path.resolve(`./src/templates/blog-post.tsx`);

  await graphql(createPagesQuery).then(async (result) => {
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

      await renderImage({ page, template, post });
    }

    await closeSEOBrowser({ browser });
  });

  return await graphql(createPagesQuery).then(async (result) => {
    if (result.errors) {
      throw result.errors;
    }

    const metaImgMap = result.data.allFile.nodes.reduce((acc, node) => {
      if (!node.publicURL.endsWith('png')) return acc;

      const postId = last(node.publicURL.split('/')).split('.')[0];
      return { ...acc, [postId]: node };
    }, {});

    // const oEmbedJsonMap = result.data.allFile.nodes.reduce((acc, node) => {
    //   if (!node.publicURL.endsWith('json')) return acc;
    //   return { ...acc, [node.id]: node };
    // }, {});

    const posts = result.data.allMdx.edges;

    for (let index = 0; index < posts.length; index++) {
      const post = posts[index];
      const { id } = post.node;

      const existingOEmbed = JSON.parse(
        fs.readFileSync(rel(`./seo-oembed/${id}.json`)).toString()
      );

      const oEmbed = JSON.stringify(
        {
          ...existingOEmbed,
          thumbnail_url: siteMetadata.siteUrl + metaImgMap[id].publicURL,
          thumbnail_width: 1200,
          thumbnail_height: 630,
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
