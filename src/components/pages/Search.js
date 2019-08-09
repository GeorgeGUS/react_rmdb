import React from 'react';
import MetaTags from '../elements/MetaTags/MetaTags';
import RMDBService from '../../services/RMDBService';

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
      <Grid title={title}>
        {movies.map(movie => (
          <MovieThumb key={movie.id} clickable movie={movie} />
        ))}
      </Grid>
      {loading && <Spinner />}
      {currentPage < totalPages && !loading && (
        <LoadMoreBtn text='Load More' onClick={updateItems} />
      )}
    </Page>
  );
};

const queryParams = {
  type: 'search',
  typeId: 'movie'
};

export default RMDBService(Search, queryParams);
