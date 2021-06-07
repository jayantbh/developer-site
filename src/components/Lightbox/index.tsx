import { HotkeyHandler } from 'components/HotkeyHandler';
import { HTMLMotionProps, motion } from 'framer-motion';
import React, {
  useRef,
  useEffect,
  MouseEventHandler,
  useMemo,
  useState,
  CSSProperties,
  HTMLAttributes,
  FC,
} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import * as css from './styles.module.scss';

const portalEl =
  typeof document !== `undefined`
    ? document.getElementById('application-portal')
    : null;

const swallowClicks: MouseEventHandler = (e) => {
  e.preventDefault();
  e.stopPropagation();
};

type LightboxProps = {
  src: string;
  caption?: string;
  onClose?: () => void;
} & HTMLMotionProps<'img'>;

const Img = styled(motion.img)`
  max-height: 90vh;
  max-width: 90vw;
  position: relative;
  margin: 0;
  overflow: hidden;
  border-radius: 8px;
`;

const LightboxContent = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 100px;
  overflow: hidden;
  border-radius: 8px;
`;

const Caption = styled(motion.div)<{ maximized: boolean }>`
  position: absolute;
  bottom: ${(p) => (p.maximized ? '2em' : '1em')};
  margin: auto;
  background: #fffd;
  border-radius: 100vw;
  padding: 4px 16px;
  font-size: ${(p) => (p.maximized ? '1em' : '0.7em')};
`;

const Close = styled(motion.div)`
  position: absolute;
  top: 1em;
  margin: auto;
  background: #fffd;
  border-radius: 100vw;
  padding: 4px 16px;
  font-size: 0.7em;
`;

const Backdrop = styled(motion.div)`
  background-color: #8885;
  backdrop-filter: blur(4px);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const lightboxStyles: CSSProperties = {
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  margin: 'auto',
};

export const Lightbox = ({
  src,
  caption,
  onClose,
  ...props
}: LightboxProps) => {
  const [maximized, setMaximized] = useState(false);
  const [size, setSize] = useState<Record<'height' | 'width', string | number>>(
    { height: 'auto', width: 'auto' }
  );

  const toggleMaximized = () => {
    setMaximized(!maximized);
  };

  return (
    <div style={{ height: size.height, width: size.width, maxWidth: '100%' }}>
      <LightboxContent
        layout
        style={maximized ? lightboxStyles : {}}
        animate={{
          zIndex: maximized ? 100 : 0,
          transition: {
            delay: maximized ? 0 : 1,
          },
        }}
      >
        <Backdrop layout />
        <Img
          {...props}
          layout
          ref={(el) => {
            if (!el?.complete) return;
            setSize({
              height: el?.parentElement?.clientHeight || '0',
              width: el?.parentElement?.clientWidth || '0',
            });
          }}
          onLoad={(e) => {
            const el = (e.target as HTMLImageElement | null)?.parentElement;
            setSize({
              height: el?.clientHeight || '0',
              width: el?.clientWidth || '0',
            });
          }}
          src={src}
          height={maximized ? undefined : props.height}
          onClick={toggleMaximized}
        />
        {!!caption && (
          <Caption layout maximized={maximized}>
            {caption}
          </Caption>
        )}
        {maximized && (
          <Close>
            Close
            <HotkeyHandler
              hotkey='Escape'
              onHotkey={toggleMaximized}
              disabled={!maximized}
              style={{
                bottom: '-0.5em',
                right: '-1em',
              }}
            />
          </Close>
        )}
      </LightboxContent>
    </div>
  );
};
