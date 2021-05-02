import React, { useRef, useEffect, MouseEventHandler, useMemo } from 'react';
import ReactDOM from 'react-dom';
import * as css from './styles.module.scss';

const portalEl = typeof document !== `undefined` ? document.getElementById('application-portal') : null;

const swallowClicks: MouseEventHandler = (e) => {
  e.preventDefault();
  e.stopPropagation();
};

type LightboxProps = {
  src: string;
  caption?: string;
  onClose?: () => void;
};

export const Lightbox = ({ src, caption, onClose }: LightboxProps) => {
  const elRef = useRef(document.createElement('div'));
  console.log(src);

  useEffect(() => {
    const el = elRef.current;
    console.log(el, portalEl);
    if (!el || !portalEl || !src) return;

    portalEl.appendChild(el);

    return () => {
      const el = elRef.current;
      if (!el || !portalEl) return;

      portalEl.removeChild(el);
    };
  }, [src]);

  const children = useMemo(
    () => (
      <div className={css.lightbox} onClick={onClose}>
        <button className={css.close}>CLOSE</button>
        <img src={src} alt='Lightboxed image' onClick={swallowClicks} />
        {caption && (
          <span className={css.caption} onClick={swallowClicks}>
            {caption}
          </span>
        )}
      </div>
    ),
    [src, caption]
  );
  return ReactDOM.createPortal(children, elRef.current);
};
