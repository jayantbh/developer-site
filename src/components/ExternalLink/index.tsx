import { FC, HTMLAttributes } from 'react';
import React from 'react';
import { SocialIcon } from 'react-social-svgs';

import * as css from './styles.module.scss';

const ExternalLink: FC<{
  to: string;
  noIcon?: boolean;
  CustomIcon?: FC<HTMLAttributes<HTMLElement>>;
}> = ({ children, to, noIcon, CustomIcon }) => (
  <a href={to} target={'_blank'} rel={'nofollow noopener noreferrer'}>
    {children}
    {!noIcon && (
      <span className={css.iconWrapper}>
        {(CustomIcon && <CustomIcon className={css.customIcon} />) || (
          <SocialIcon url={to} className={css.icon} />
        )}
      </span>
    )}
  </a>
);

export default ExternalLink;
