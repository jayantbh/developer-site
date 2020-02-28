import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Code } from 'components/Code';
import { preToCodeBlock } from 'mdx-utils';

import './globals/prism-theme.scss';

const components = {
  pre: (preProps: any) => {
    const props = preToCodeBlock(preProps);

    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />;
    } else {
      // it's possible to have a pre without a code in it
      return <pre {...preProps} />;
    }
  },
};

export const wrapRootElement = ({ element }: any) => <MDXProvider components={components}>{element}</MDXProvider>;
