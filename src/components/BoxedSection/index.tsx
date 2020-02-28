import React, { FC, HTMLAttributes } from 'react';

import css from './styles.module.scss';

const BoxedSection: FC<HTMLAttributes<HTMLElement>> = ({ children, ...props }) => (
  <section {...props} className={`${css['boxed-section']} ${props.className}`}>
    {children}
  </section>
);

export default BoxedSection;
