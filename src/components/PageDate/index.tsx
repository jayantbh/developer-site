import React, { FC } from 'react';
import { rhythm, scale } from 'utils/typography';

const PageDate: FC<{}> = ({ children }) => (
  <p
    style={{
      ...scale(-1 / 5),
      display: `block`,
      marginBottom: rhythm(1),
      marginTop: rhythm(-1),
    }}
  >
    {children}
  </p>
);

export default PageDate;
