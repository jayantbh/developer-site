const { renderToString } = require('react-dom/server');
const mdx = require('@mdx-js/mdx');
const React = require('react');
const { MDXProvider, mdx: createElement } = require('@mdx-js/react');
const babel = require('@babel/core');
const { parse } = require('node-html-parser');
const fs = require('fs');

const mdxToString = (filePath) => {
  const transform = (code) =>
    babel.transform(code, {
      plugins: [
        '@babel/plugin-transform-react-jsx',
        '@babel/plugin-proposal-object-rest-spread',
      ],
    }).code;

  const renderWithReact = (mdxCode) => {
    let variablesToReplace = [];

    mdxCode = mdxCode
      .replace(/---(.|\n)*?---(\n)+/im, '')
      .replace(/import (\w*).*\n/gim, (line, match) => {
        if (line.includes('.png')) variablesToReplace.push(match);
        return '';
      });

    while (variablesToReplace.length) {
      mdxCode = mdxCode.replace(new RegExp(variablesToReplace[0], 'gm'), '""');
      variablesToReplace.shift();
    }

    const jsx = mdx.sync(mdxCode, { skipExport: true });
    const transformed = transform(jsx);
    const scope = { mdx: createElement };

    const fn = new Function(
      'React',
      ...Object.keys(scope),
      `${transformed}; return React.createElement(MDXContent)`
    );

    const element = fn(React, ...Object.values(scope));
    const components = {
      // p: ({ children }) => ['\n', children, '\n'],
      a: ({ children }) => children,
      ExternalLink: ({ children }) => children,
      InlineImages: () => `\n\n[images, view page to see]\n\n`,
      code: () => ` [code snippet, view page to see] `,
      pre: () => `\n\n[code snippet, view page to see]\n\n`,
      sub: ({ children }) => [children, '\n\n'],
      br: () => '\n',
    };

    const elementWithProvider = React.createElement(
      MDXProvider,
      { components },
      element
    );

    return renderToString(elementWithProvider);
  };

  const file = fs.readFileSync(filePath).toString();

  const body = parse(renderWithReact(file));
  [...body.querySelectorAll('p')].map(
    (el) => (el.textContent = el.text.replace(/\n/g, ' '))
  );

  return body.innerHTML.replace(/(\n\n)\n+/gm, '$1');
};

module.exports = { mdxToString };
