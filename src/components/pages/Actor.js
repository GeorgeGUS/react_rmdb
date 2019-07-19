import React from 'react';
import MetaTags from '../elements/MetaTags/MetaTags';
import RMDBService from '../../services/RMDBService';

import { getPosterUrl, getThumbUrl } from '../../config';
import Breadcrumbs from '../elements/Breadcrumbs/Breadcrumbs';
import ActorInfo from '../elements/Info/ActorInfo';
import ActorInfoBar from '../elements/InfoBar/ActorInfoBar';
import Grid from '../elements/Grid/Grid';
import MovieThumb from '../elements/MovieThumb/MovieThumb';
import Spinner from '../elements/Spinner/Spinner';

import './page.css';

const Actor = ({ response, loading }) => {
  const movies = response && response.movie_credits.cast;
  return (
    <div className='rmdb-page'>
      {response && (
        <>
          <MetaTags
            title={`RMDB - ${response.name}`}
            desc={response.biography}
            image={getPosterUrl(response.profile_path)}
          />
          <Breadcrumbs title={response.name} />
          <ActorInfo actor={response} />
          <ActorInfoBar actor={response} />
        </>
      )}
      {movies && (
        <Grid
          header={`${movies.length} Movies with ${response.name}`}
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
                gender={response.gender}
                character={el.character}
              />
            ))}
        </Grid>
      )}
      {loading && <Spinner />}
      {!movies && !loading && <h1>Not found!</h1>}
    </div>
  );
};

export default RMDBService(Actor, 'person', null, [
  'images',
  'movie_credits',
  'tv_credits'
]);
