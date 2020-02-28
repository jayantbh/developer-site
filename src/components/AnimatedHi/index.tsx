import React, { DOMAttributes, FC, HTMLAttributes, SVGAttributes, useLayoutEffect, useRef } from 'react';

import HiSvg from 'assets/components/hi.svg';
import css from './styles.module.scss';

const getNumAttr = (el: SVGElement, attr: keyof SVGAttributes<any>) => parseInt(el.getAttribute(attr) as string, 10);

const AnimatedHi: FC<{}> = () => {
  const elRef = useRef<null | HTMLDivElement>(null);

  useLayoutEffect(() => {
    (async () => {
      if (!elRef.current) return;

      const el: SVGElement | null = elRef.current.querySelector('svg');
      if (!el) return;

      const svgHeight = getNumAttr(el, 'height');

      const svgElements: SVGElement[] = Array.from(el.querySelectorAll('*'));

      for (const shape of svgElements) {
        switch (shape.tagName) {
          case 'rect': {
            const xAttr = getNumAttr(shape, 'x');
            const yAttr = getNumAttr(shape, 'y');
            const width = getNumAttr(shape, 'width');
            const atTop = !Number.isInteger(yAttr);

            shape.style.transform = 'scaleY(0)';
            shape.style.transformOrigin = `${xAttr + width / 2}px ${atTop ? 0 : svgHeight}px`;
            break;
          }
          case 'circle': {
            const xAttr = getNumAttr(shape, 'cx');
            const yAttr = getNumAttr(shape, 'cy');
            const atTop = !Number.isInteger(yAttr);

            shape.style.transform = 'scale(0)';
            shape.style.transformOrigin = `${xAttr}px ${atTop ? 0 : yAttr}px`;
            break;
          }
          default:
            shape.style.transform = 'scale(0)';
        }

        await new Promise(res => setTimeout(res, 200));
      }

      await new Promise(res => setTimeout(res, 200));
      for (const shape of svgElements) {
        switch (shape.tagName) {
          case 'rect':
            shape.style.transform = 'scaleY(1)';
            break;
          case 'circle':
          default:
            shape.style.transform = 'scale(1)';
        }

        await new Promise(res => setTimeout(res, 200));
      }
    })();
  }, [elRef]);

  return (
    <div ref={elRef} className={css.container}>
      <HiSvg />
    </div>
  );
};

export default AnimatedHi;
