import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { LANG } from '../../../config';

const MetaTags = ({ title, desc, image }) => (
  <Helmet>
    <html lang={LANG} />
    <title>{title}</title>
    <meta name='title' content={title} />
    <meta name='description' content={desc} />
    <meta property='og:type' content='website' />
    <meta property='og:url' content={document.location.href} />
    <meta property='og:title' content={title} />
    <meta property='og:description' content={desc} />
    <meta property='og:image' content={image} />
    <meta property='twitter:card' content='summary_large_image' />
    <meta property='twitter:url' content={document.location.href} />
    <meta property='twitter:title' content={title} />
    <meta property='twitter:description' content={desc} />
    <meta property='twitter:image' content={image} />
    <link rel='canonical' href={document.location.href} />
  </Helmet>
);

MetaTags.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  image: PropTypes.string
};

export default MetaTags;
