import { FC } from 'react';
import React from 'react';

const Titled: FC<{ title: string }> = ({ children, title }) => (
  <u
    title={title}
    onClick={(e) => alert(e.currentTarget.getAttribute('title'))}
  >
    {children}
  </u>
);

export default Titled;
