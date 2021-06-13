const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const fs = require('fs');
const puppeteer = require('puppeteer');
const hbs = require('handlebars');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const rel = (p) => path.join(__dirname, p);

  try {
    fs.mkdirSync(rel('./seo-images/tmp'), { recursive: true });
  } catch (e) {}

  const template = hbs.compile(
    fs.readFileSync(rel('./seo-image-builder/content.html')).toString()
  );

  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--window-size=1200,630',
    ],
  });

  const page = await browser.newPage();
  page.setViewport({ width: 1200, height: 630 });

  const blogPost = path.resolve(`./src/templates/blog-post.tsx`);
  return graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              id
              excerpt
              fields {
                slug
              }
              frontmatter {
                title
                date
                desc
              }
              body
              timeToRead
            }
          }
        }
      }
    `
  ).then(async (result) => {
    if (result.errors) {
      throw result.errors;
    }

    const posts = result.data.allMdx.edges;

    for (let index = 0; index < posts.length; index++) {
      const post = posts[index];
      const { id } = post.node;

      const previous =
        index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      const liveExamples = [...post.node.body.matchAll('"live": true')].length;
      const codeExamples = [...post.node.body.matchAll('parentName: "pre"')]
        .length;
      const duration = `${Math.round(post.node.timeToRead)} min read`;

      const desc =
        post.node.frontmatter.desc ||
        post.node.excerpt.replace(/\n/, ' ').replace(/ (\,|\.|\?|\!)/g, '$1');

      const examples = liveExamples
        ? `${liveExamples} live code example` + (liveExamples !== 1 ? 's' : '')
        : codeExamples
        ? `${codeExamples} code examples` + (codeExamples !== 1 ? 's' : '')
        : 'Text article';

      const props = {
        title: post.node.frontmatter.title,
        desc,
        duration,
        examples,
        date: post.node.frontmatter.date,
      };

      const result = template(props);
      fs.writeFileSync(rel(`./seo-images/tmp/${id}.html`), result);

      await page.goto('file:' + rel(`./seo-images/tmp/${id}.html`));
      await page.screenshot({ path: rel(`./seo-images/${id}.png`) });

      createPage({
        path: '/blog' + post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          metaImg: `**/${id}.png`,
          previous,
          next,
        },
      });
    }

    fs.rmSync(rel(`./seo-images/tmp/`), { recursive: true, force: true });

    await browser.close();
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
