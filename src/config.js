// Configuration for TMDB
// To se the latest configuration fetch it from https://api.themoviedb.org/3/configuration?api_key=844dba0bfd8f3a4f3799f6130ef9e335

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '844dba0bfd8f3a4f3799f6130ef9e335';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';
const NO_IMAGE_URL = `${process.env.PUBLIC_URL}/images/no_image.jpg`;

const VIDEO_URL = 'https://www.youtube.com/watch?v=';

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

export {
  API_URL,
  API_KEY,
  VIDEO_URL,
  LANG,
  getBackdropUrl,
  getPosterUrl,
  getThumbUrl,
  getProfileUrl
};
