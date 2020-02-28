declare module 'typography-theme-stern-grove';
declare module 'gatsby-plugin-mdx';
declare module 'gatsby-plugin-mdx/context';
declare module '@mdx-js/tag';
declare module '@mdx-js/react';
declare module 'mdx-utils';
declare module 'react-social-svgs';

declare module '*.jpg';
declare module '*.svg';
declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}
