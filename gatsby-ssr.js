import React from 'react';
import { wrapRootElement as wrap } from './src/wrap-root-element';

export const wrapRootElement = wrap;

export const onRenderBody = ({setPostBodyComponents}) => {
    setPostBodyComponents([
        <div id='application-portal' />
    ]);
}