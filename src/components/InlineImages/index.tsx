import { Lightbox } from 'components/Lightbox';
import React, { FC, HTMLAttributes, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import * as css from './styles.module.scss';

type URL = string;
type ImgRes = {
  url: URL;
  caption?: string;
};

type Props = {
  height: number;
  images: (URL | ImgRes)[];
} & HTMLAttributes<HTMLElement>;

const LightboxWrapper = styled.div`
  max-width: 100%;
`;

const InlineImages: FC<Props> = ({ images, height, ...props }) => {
  return (
    <section {...props} className={`${css.container} ${props.className || ''}`}>
      {images.map((img) => {
        const url = typeof img === 'string' ? img : img.url;
        const caption = typeof img === 'string' ? undefined : img.caption;

        return (
          <LightboxWrapper
            key={url}
            className={caption && css.captionImg}
            style={{
              width: `calc(${100 / images.length}% - ${
                (8 * (images.length - 1)) / images.length
              }px)`,
            }}
          >
            <Lightbox src={url} height={height} caption={caption} />
          </LightboxWrapper>
        );
      })}
    </section>
  );
};

export default InlineImages;
