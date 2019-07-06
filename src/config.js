// Configuration for TMDB
// To se the latest configuration fetch it from https://api.themoviedb.org/3/configuration?api_key=844dba0bfd8f3a4f3799f6130ef9e335

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '844dba0bfd8f3a4f3799f6130ef9e335';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';
const NO_IMAGE_URL = `${process.env.PUBLIC_URL}/images/no_image.jpg`;

const getImageUrl = (imageSize, isBackdrop) => imagePath => {
  const noImageUrl = isBackdrop ? '' : NO_IMAGE_URL;
  return imagePath ? `${IMAGE_BASE_URL}${imageSize}${imagePath}` : noImageUrl;
};

const getBackdropUrl = getImageUrl('w1280', true);
const getPosterUrl = getImageUrl('w500');
const getThumbUrl = getImageUrl('w300');
const getProfileUrl = getImageUrl('w154');

// const LANG = 'ru-RU';
const LANG = 'en-US';

const setMetaTags = (title, desc, image) => {
  document.title = title;
  const url = document.location.href;
  const links = [
    { propName: 'name', prop: 'title', content: title },
    { propName: 'name', prop: 'description', content: desc },
    { propName: 'property', prop: 'og:type', content: 'website' },
    { propName: 'property', prop: 'og:url', content: url },
    { propName: 'property', prop: 'og:title', content: title },
    { propName: 'property', prop: 'og:description', content: desc },
    { propName: 'property', prop: 'og:image', content: image },
    {
      propName: 'property',
      prop: 'twitter:card',
      content: 'summary_large_image'
    },
    { propName: 'property', prop: 'twitter:url', content: url },
    { propName: 'property', prop: 'twitter:title', content: title },
    { propName: 'property', prop: 'twitter:description', content: desc },
    { propName: 'property', prop: 'twitter:image', content: image }
  ];
  const oldLinks = document.head.querySelectorAll('[data-mt]');
  [...oldLinks].forEach(link => document.head.removeChild(link));
  links.forEach(({ propName, prop, content }) => {
    if (content) {
      const link = document.createElement('meta');
      link.setAttribute(propName, prop);
      link.content = content;
      link.dataset['mt'] = true;
      document.head.appendChild(link);
    }
  });
};

export {
  API_URL,
  API_KEY,
  LANG,
  getBackdropUrl,
  getPosterUrl,
  getThumbUrl,
  getProfileUrl,
  setMetaTags
};
