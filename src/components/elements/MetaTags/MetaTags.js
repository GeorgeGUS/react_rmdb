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
    <meta property='twitter:type' content='website' />
    <meta property='twitter:url' content={document.location.href} />
    <meta property='twitter:title' content={title} />
    <meta property='twitter:description' content={desc} />
    <meta property='twitter:image' content={image} />
    <meta property='twitter:image:url' content={image} />
    <meta property='twitter:image:width' content='500' />
    <meta property='twitter:image:height' content='750' />
    <meta property='twitter:site_name' content='React Movie' />
    <meta property='vk:type' content='website' />
    <meta property='vk:url' content={document.location.href} />
    <meta property='vk:title' content={title} />
    <meta property='vk:description' content={desc} />
    <meta property='vk:image' content={image} />
    <meta property='vk:image:url' content={image} />
    <meta property='vk:image:width' content='500' />
    <meta property='vk:image:height' content='750' />
    <meta property='vk:site_name' content='React Movie' />
    <link rel='image_src' href={image} />
    <link rel='canonical' href={document.location.href} />
  </Helmet>
);

MetaTags.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  image: PropTypes.string
};

export default MetaTags;
