import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const MetaTags = ({ title, desc, image }) => (
  <Helmet>
    <title>{title}</title>
    <meta name='title' content={title} />
    <meta name='description' content={desc} />
    <meta property='og:type' content='website' />
    <meta property='og:url' content={document.location.href} />
    <meta property='og:title' content={title} />
    <meta property='og:description' content={desc} />
    <meta property='og:image' content={image} />
  </Helmet>
);

MetaTags.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string
};

export default MetaTags;
