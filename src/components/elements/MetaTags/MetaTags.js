import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const MetaTags = ({ title, desc, image }) => (
  <Helmet>
    <html lang='en' prefix='og http://ogp.me/ns#' />
    <title>{title}</title>
    <meta name='title' content={title} />
    <meta name='description' content={desc} />
    <meta property='og:type' content='website' />
    <meta property='og:url' content={document.location.href} />
    <meta property='og:title' content={title} />
    <meta property='og:description' content={desc} />
    <meta property='og:image' content={image} />
    <meta property='og:image:url' content={image} />
    <meta property='og:image:width' content='500' />
    <meta property='og:image:height' content='750' />
    <meta property='og:site_name' content='React Movie' />
    <link rel='canonical' href={document.location.href} />
  </Helmet>
);

MetaTags.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  image: PropTypes.string
};

export default MetaTags;
