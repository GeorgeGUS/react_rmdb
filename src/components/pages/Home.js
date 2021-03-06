import React from 'react';
import MetaTags from '../elements/MetaTags/MetaTags';
import RMDBService from '../../services/RMDBService';

import { getBackdropUrl } from '../../config';
import Page from '../elements/Page/Page';
import Grid from '../elements/Grid/Grid';
import HeroImage from '../elements/HeroImage/HeroImage';
import LoadMoreBtn from '../elements/LoadMoreBtn/LoadMoreBtn';
import { MovieThumb } from '../elements/Thumbs';
import SearchBar from '../elements/SearchBar/SearchBar';
import Spinner from '../elements/Spinner/Spinner';

const Home = ({ loading, movies, currentPage, totalPages, loadMoreItems }) => {
  const heroImage = movies.length > 0 ? movies[0] : {};
  return (
    <Page>
      <MetaTags
        title='RMDB - Popular Movies'
        desc='React Movie (or RMDB) is a database for searching information about movies and actors'
        image={getBackdropUrl(heroImage.backdrop_path)}
      />
      <HeroImage
        image={getBackdropUrl(heroImage.backdrop_path)}
        title={heroImage.original_title}
        text={heroImage.overview}
      />
      <SearchBar />
      <Grid title='Popular Movies'>
        {movies.map(movie => (
          <MovieThumb key={movie.id} movie={movie} />
        ))}
      </Grid>
      {loading && <Spinner />}
      {currentPage < totalPages && !loading && (
        <LoadMoreBtn text='Load More' onClick={loadMoreItems} />
      )}
    </Page>
  );
};

const queryParams = {
  type: 'movie',
  typeId: 'popular'
};

export default RMDBService(Home, queryParams);
