import { Lightbox } from 'components/Lightbox';
import React, { FC, HTMLAttributes, useState, useEffect, useRef } from 'react';

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

const InlineImages: FC<Props> = ({ images, height, ...props }) => {
  const [lightboxedImg, setLightboxedImg] = useState<ImgRes | void>();
  return (
    <>
      {lightboxedImg && (
        <Lightbox src={lightboxedImg.url} caption={lightboxedImg.caption} onClose={() => setLightboxedImg()} />
      )}
      <section {...props} className={`${css.container} ${props.className || ''}`}>
        {images.map((img) => {
          const url = typeof img === 'string' ? img : img.url;
          const caption = typeof img === 'string' ? undefined : img.caption;

          return (
            <div key={url} className={caption && css.captionImg}>
              <img src={url} height={height} onClick={() => setLightboxedImg({ url, caption })} />
              {caption && <span className={css.caption}>{caption}</span>}
            </div>
          );
        })}
      </section>
    </>
  );
};

export default InlineImages;
