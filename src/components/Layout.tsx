import React, { FC, ReactNode } from 'react';
import { Link } from 'gatsby';

import { rhythm, scale } from 'utils/typography';
import ExternalLink from 'components/ExternalLink';

type Props = { location: Location; title?: string };

const Layout: FC<Props> = ({ location, title, children }) => {
  const rootPath = `${process.env.PUBLIC_URL}/`;
  let header: ReactNode;

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    );
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Nunito, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    );
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      {header}
      {children}
      <footer style={{ marginTop: rhythm(1) }}>
        © {new Date().getFullYear()}, Built with <span role={'img'}>❤️</span> by{' '}
        <ExternalLink to='https://github.com/jayantbh'>Me!</ExternalLink>
      </footer>
    </div>
  );
};

export default Layout;
