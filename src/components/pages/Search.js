import React from 'react';
import MetaTags from '../elements/MetaTags/MetaTags';
import RMDBService from '../../services/RMDBService';

import { getPosterUrl } from '../../config';
import Page from '../elements/Page/Page';
import Grid from '../elements/Grid/Grid';
import LoadMoreBtn from '../elements/LoadMoreBtn/LoadMoreBtn';
import MovieThumb from '../elements/MovieThumb/MovieThumb';
import SearchBar from '../elements/SearchBar/SearchBar';
import Spinner from '../elements/Spinner/Spinner';

const Search = ({
  loading,
  movies,
  currentPage,
  totalPages,
  updateItems,
  searchTerm
}) => {
  const title = `Search results for "${searchTerm}"`;
  return (
    <Page>
      <MetaTags title={`RMDB - Search: ${searchTerm}`} desc={title} />
      <SearchBar />
      <Grid header={title} loading={loading}>
        {movies.map(el => (
          <MovieThumb
            key={el.id}
            clickable
            title={el.title}
            year={el.release_date && el.release_date.slice(0, 4)}
            image={getPosterUrl(el.poster_path)}
            movieId={el.id}
            movieName={el.title}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {currentPage < totalPages && !loading && (
        <LoadMoreBtn text='Load More' onClick={updateItems} />
      )}
    </Page>
  );
};

export default RMDBService(Search, 'search', 'movie');
