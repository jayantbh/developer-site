import React, { FC, HTMLAttributes, useEffect, useState } from 'react';
import { Link } from 'gatsby';
import cls from 'classnames';

import SEO from 'components/SEO';
import css from './index.module.scss';
import ExternalLink from 'components/ExternalLink';
import AnimatedHi from 'components/AnimatedHi';

const Effect: FC<HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => (
  <div {...props} className={cls(css.effect, props.className)}>
    {children}
  </div>
);

const Home: FC<{}> = () => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setExpanded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={css.container}>
      <SEO title='Welcome' keywords={[`jayant bhawal`, `frontend`, `javascript`, `react`, `typescript`, `gatsby`]} />
      <div className={css['effect-wrapper']}>
        <Effect className={cls(css['effect-1'], css.small, expanded && css['triggered-effect-1'])}>
          <AnimatedHi />
        </Effect>
      </div>
      <h1 className={css.h1}>I'm Jayant Bhawal</h1>
      <nav className={css.navigation}>
        <Link to={'/about'}>About</Link>
        <Link to={'/blog'}>Blog</Link>
        <ExternalLink to={'https://jayant.tech'} noIcon={true}>
          Experiments
        </ExternalLink>
      </nav>
    </div>
  );
};

export default Home;
