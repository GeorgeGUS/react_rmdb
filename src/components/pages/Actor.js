import React, { Component } from 'react';
import MetaTags from '../elements/MetaTags/MetaTags';
import RMDBService from '../../services/RMDBService';

import { getPosterUrl, getThumbUrl } from '../../config';
import Breadcrumbs from '../elements/Breadcrumbs/Breadcrumbs';
import ActorInfo from '../elements/Info/ActorInfo';
import ActorInfoBar from '../elements/InfoBar/ActorInfoBar';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import MovieThumb from '../elements/MovieThumb/MovieThumb';
import Spinner from '../elements/Spinner/Spinner';

import './page.css';

class Actor extends Component {
  render() {
    const { response, loading } = this.props;
    const actor = response;
    const movies = actor && actor.movie_credits.cast;
    return (
      <div className='rmdb-page'>
        {actor && (
          <>
            <MetaTags
              title={`RMDB - ${actor.name}`}
              desc={actor.biography}
              image={getPosterUrl(actor.profile_path)}
            />
            <Breadcrumbs title={actor.name} />
            <ActorInfo actor={actor} />
            <ActorInfoBar actor={actor} />
          </>
        )}
        {movies && (
          <FourColGrid
            header={`${movies.length} Movies with ${actor.name}`}
            loading={loading}
          >
            {movies
              .sort((a, b) => {
                return new Date(b.release_date) - new Date(a.release_date);
              })
              .map(el => (
                <MovieThumb
                  key={el.id}
                  clickable
                  title={el.title}
                  year={el.release_date && el.release_date.slice(0, 4)}
                  image={getThumbUrl(el.poster_path)}
                  movieId={el.id}
                  movieName={el.title}
                  gender={actor.gender}
                  character={el.character}
                />
              ))}
          </FourColGrid>
        )}
        {loading && <Spinner />}
        {!movies && !loading && <h1>Not found!</h1>}
      </div>
    );
  }
}

export default RMDBService(Actor, 'person', null, [
  'images',
  'movie_credits',
  'tv_credits'
]);
