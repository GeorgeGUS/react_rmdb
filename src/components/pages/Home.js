import React from 'react';
import MetaTags from '../elements/MetaTags/MetaTags';
import RMDBService from '../../services/RMDBService';

import { getBackdropUrl, getPosterUrl } from '../../config';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import HeroImage from '../elements/HeroImage/HeroImage';
import LoadMoreBtn from '../elements/LoadMoreBtn/LoadMoreBtn';
import MovieThumb from '../elements/MovieThumb/MovieThumb';
import SearchBar from '../elements/SearchBar/SearchBar';
import Spinner from '../elements/Spinner/Spinner';

import './page.css';

const Home = ({ loading, movies, currentPage, totalPages, updateItems }) => {
  const heroImage = movies.length > 0 ? movies[0] : {};
  return (
    <div className='rmdb-page'>
      <MetaTags
        title={'RMDB - Popular Movies'}
        desc={
          'React Movie (or RMDB) is a database for searching information about movies and actors'
        }
        image={getBackdropUrl(heroImage.backdrop_path)}
      />
      <HeroImage
        image={getBackdropUrl(heroImage.backdrop_path)}
        title={heroImage.original_title}
        text={heroImage.overview}
      />
      <SearchBar onSubmit={updateItems} />
      <FourColGrid header={'Popular Movies'} loading={loading}>
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
      </FourColGrid>
      {loading && <Spinner />}
      {currentPage < totalPages && !loading && (
        <LoadMoreBtn text='Load More' onClick={updateItems} />
      )}
    </div>
  );
};

export default RMDBService(Home, 'movie', 'popular');
