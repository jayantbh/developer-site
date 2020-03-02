import React, { FC, HTMLAttributes, useState, useCallback, ReactEventHandler } from 'react';
import map from 'ramda/es/mapObjIndexed';

import css from './styles.module.scss';

type URL = string;

type Props = {
  images: URL[];
} & HTMLAttributes<HTMLElement>;

type ImageSizeEntry = {
  [key in URL]: {
    width: number;
    actualWidth: number;
  };
};

const InlineImages: FC<Props> = ({ images, ...props }) => {
  const [imageWidthMap, setImageWidthMap] = useState<ImageSizeEntry>({});
  const updateImageMap = useCallback(
    (e => {
      const target = e.currentTarget;
      const totalWidth = Object.values(imageWidthMap).reduce((acc, entry) => acc + entry.actualWidth, 0) + target.width;
      console.log(target.width, target.src, totalWidth);

      const _map = map<ImageSizeEntry>(
        entry => ({
          width: (entry.actualWidth / totalWidth) * 100 + '%',
          actualWidth: entry.actualWidth,
        }),
        {
          ...imageWidthMap,
          [target.src]: {
            width: target.width,
            actualWidth: target.width,
          },
        }
      );

      setImageWidthMap(_map);
    }) as ReactEventHandler<HTMLImageElement>,
    [imageWidthMap]
  );

  return (
    <section {...props} className={`${css.container} ${props.className}`}>
      {images.map(src => (
        <img key={src} src={src} width={imageWidthMap[src]?.width || undefined} onLoad={updateImageMap} />
      ))}
    </section>
  );
};

export default InlineImages;
