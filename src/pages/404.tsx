import React, { FC } from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

const NotFoundPage: FC<{ location: Location }> = ({ location }) => (
  <Layout location={location}>
    <SEO title='404: Not Found' />
    <h1>Not Found</h1>
    <p>You just hit a route that doesn't exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
