import React, { FC } from 'react';

const Tag: FC<{ is: string }> = ({ is, children }) => (
  // @ts-ignore
  <a href={'#' + is} name={is}>
    {children || '🔗 '}
  </a>
);

export default Tag;
