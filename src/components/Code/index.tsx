import React, { CSSProperties, FC, useCallback, useState } from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import cls from 'classnames';
import { useMDXScope } from 'gatsby-plugin-mdx/context';

import * as css from './styles.module.scss';
import { HotkeyHandler } from 'components/HotkeyHandler';
import { motion, useAnimation } from 'framer-motion';

const fixedEditorStyles: CSSProperties = {
  position: 'fixed',
  zIndex: 100,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  height: '90vh',
  width: '90vw',
  maxHeight: 'initial',
  margin: 'auto',
};

type Props = {
  codeString: string;
  language: Language;
  live?: boolean;
  hideable?: boolean;
  hidden?: boolean;
  title?: string;
};

export const Code: FC<Props> = ({
  codeString,
  language,
  live = false,
  hideable = false,
  hidden = false,
  title = '',
}) => {
  const components = useMDXScope();

  const [isMaximized, setIsMaximized] = useState(false);
  const [isHidden, _setIsHidden] = useState(hideable && hidden);
  const setIsHidden = useCallback(
    (state) => {
      if (!hideable) return;
      _setIsHidden(state);
    },
    [hideable, _setIsHidden]
  );

  const HideableIndicatorBar = hideable && (
    <div className={css.hideableToggle}>
      <button onClick={() => setIsHidden(!isHidden)}>
        {isHidden ? 'Show' : 'Hide'} {live ? 'editor' : 'code'}
      </button>
      <div className={css.spacerBar} />
      {(!!title || (isHidden && !title)) && <div>{title || codeString}</div>}
    </div>
  );

  const setMax = async () => {
    setIsMaximized(!isMaximized);
  };

  if (live && typeof document !== 'undefined') {
    return (
      <div className={css.componentWrapper}>
        {HideableIndicatorBar}
        <div
          style={{
            height: isHidden ? '0px' : 'auto',
            overflow: isHidden ? 'hidden' : 'visible',
          }}
        >
          <LiveProvider
            code={codeString}
            noInline={true}
            scope={components}
            theme={undefined}
          >
            <div className={css.liveEditorContainer}>
              {isMaximized && <div style={{ height: '458px' }} />}
              <motion.div
                layout
                className='editor-wrapper'
                style={isMaximized ? fixedEditorStyles : {}}
                animate={{
                  zIndex: isMaximized ? 100 : 0,
                  transition: {
                    delay: isMaximized ? 0 : 1,
                  },
                }}
              >
                <motion.div
                  layout='position'
                  className={css.languageBarContainer}
                >
                  <div className={css.languageBarContent}>
                    {language} → editable
                  </div>
                  <button className={css.languageBarContent} onClick={setMax}>
                    <div>{isMaximized ? 'minimize' : 'maximize'}</div>
                    <HotkeyHandler
                      hotkey='Escape'
                      disabled={!isMaximized}
                      onHotkey={setMax}
                    />
                  </button>
                </motion.div>
                <motion.div layout='position'>
                  <LiveEditor
                    className='live-editor'
                    style={{ fontFamily: '"Courier Prime", monospace' }}
                  />
                </motion.div>
              </motion.div>
            </div>
            <LiveError />
            <div className={css.previewWindow}>
              <div className={css.languageBarContainer}>
                <div className={css.languageBarContent}>
                  {language} → preview
                </div>
              </div>
              <LivePreview />
            </div>
          </LiveProvider>
        </div>
      </div>
    );
  }

  return (
    <div className={css.componentWrapper}>
      {HideableIndicatorBar}
      {!isHidden && (
        <Highlight
          {...defaultProps}
          code={codeString}
          language={language}
          theme={undefined}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <motion.pre
              layout
              className={cls(className, css.codeContainer)}
              style={{ ...style, ...(isMaximized ? fixedEditorStyles : {}) }}
              animate={{
                zIndex: isMaximized ? 100 : 0,
                transition: {
                  delay: isMaximized ? 0 : 1,
                },
              }}
            >
              <motion.div
                layout='position'
                className={css.languageBarContainer}
              >
                <div className={css.languageBarContent}>
                  {language} → view-only
                </div>
                <button className={css.languageBarContent} onClick={setMax}>
                  <div>{isMaximized ? 'minimize' : 'maximize'}</div>
                  <HotkeyHandler
                    hotkey='Escape'
                    disabled={!isMaximized}
                    onHotkey={setMax}
                  />
                </button>
              </motion.div>
              <motion.div layout='position' className={css.codeContent}>
                {tokens.map((line, i) => {
                  const lineProps = getLineProps({ line, key: i });

                  return (
                    <div
                      {...lineProps}
                      className={cls(lineProps.className, css.lineContainer)}
                    >
                      <div className={css.lineNumber}>{i + 1}</div>
                      <div className={css.lineContent}>
                        {line.map((token, key) => (
                          <span {...getTokenProps({ token, key })} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </motion.pre>
          )}
        </Highlight>
      )}
    </div>
  );
};
