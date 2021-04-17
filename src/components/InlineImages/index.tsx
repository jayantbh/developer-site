import React, { FC, HTMLAttributes, useState, useCallback, ReactEventHandler } from 'react';
import map from 'ramda/es/mapObjIndexed';

import * as css from './styles.module.scss';

type URL = string;

type Props = {
  images: URL[];
} & HTMLAttributes<HTMLElement>;

type ImageSize = {
  width: string;
  actualWidth: number;
};

type ImageSizeMap = Record<URL, ImageSize>;

const InlineImages: FC<Props> = ({ images, ...props }) => {
  const [imageWidthMap, setImageWidthMap] = useState<ImageSizeMap>({});
  const updateImageMap = useCallback(
    ((e) => {
      const target = e.currentTarget;
      const totalWidth = Object.values(imageWidthMap).reduce((acc, entry) => acc + entry.actualWidth, 0) + target.width;
      console.log(target.width, target.src, totalWidth);

      const _map = map<ImageSize, ImageSize>(
        (entry) => ({
          width: (entry.actualWidth / totalWidth) * 100 + '%',
          actualWidth: entry.actualWidth,
        }),
        {
          ...imageWidthMap,
          [target.src]: {
            width: String(target.width),
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
      {images.map((src) => (
        <img key={src} src={src} width={imageWidthMap[src]?.width || undefined} onLoad={updateImageMap} />
      ))}
    </section>
  );
};

export default InlineImages;
