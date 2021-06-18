import React, { FC, HTMLAttributes } from 'react';

import * as css from './styles.module.scss';

const BoxedSection: FC<HTMLAttributes<HTMLElement>> = ({
  children,
  ...props
}) => (
  <section
    {...props}
    className={`${css.boxedSection} ${props.className || ''}`}
  >
    {children}
  </section>
);

export default BoxedSection;
