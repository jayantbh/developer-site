import React, { FC } from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import cls from 'classnames';
import { useMDXScope } from 'gatsby-plugin-mdx/context';

import css from './styles.module.scss';

type Props = {
  codeString: string;
  language: Language;
  live: boolean;
};

export const Code: FC<Props> = ({ codeString, language, live }) => {
  const components = useMDXScope();
  if (live) {
    return (
      <LiveProvider code={codeString} noInline={true} scope={components}>
        <div className={css['live-editor-container']}>
          <div className={css['language-bar-live']}>{language} → editable</div>
          <LiveEditor className={'live-editor'} />
        </div>
        <LiveError />
        <div className={css['preview-window']}>
          <div className={css['language-bar-live']}>{language} → preview</div>
          <LivePreview />
        </div>
      </LiveProvider>
    );
  }

  return (
    <Highlight {...defaultProps} code={codeString} language={language} theme={undefined}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={cls(className, css['code-container'])} style={style}>
          <div className={css['language-bar']}>{language}</div>
          <div className={css['code-content']}>
            {tokens.map((line, i) => {
              const lineProps = getLineProps({ line, key: i });

              return (
                <div {...lineProps} className={cls(lineProps.className, css['line-container'])}>
                  <div className={css['line-number']}>{i + 1}</div>
                  <div className={css['line-content']}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </pre>
      )}
    </Highlight>
  );
};
