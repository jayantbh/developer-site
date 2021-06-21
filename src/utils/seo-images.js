const puppeteer = require('puppeteer');
const hbs = require('handlebars');
const fs = require('fs');
const path = require(`path`);

const { rel } = require('./node');

// const rel = (p) => path.join(process.cwd(), p);

module.exports = {
  prepareSEOBrowser: async () => {
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

    return { browser, page, template };
  },

  renderImage: async ({ page, template, post }) => {
    const { id } = post.node;
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
  },

  closeSEOBrowser: async ({ browser }) => {
    await browser.close();
    fs.rmSync(rel(`./seo-images/tmp/`), { recursive: true, force: true });
  },
};
