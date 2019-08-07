import React from 'react';
import MetaTags from '../elements/MetaTags/MetaTags';
import RMDBService from '../../services/RMDBService';

import { getPosterUrl } from '../../config';
import Page from '../elements/Page/Page';
import Breadcrumbs from '../elements/Breadcrumbs/Breadcrumbs';
import ActorInfo from '../elements/Info/ActorInfo';
import ActorInfoBar from '../elements/InfoBar/ActorInfoBar';
import Grid from '../elements/Grid/Grid';
import MovieThumb from '../elements/MovieThumb/MovieThumb';
import Spinner from '../elements/Spinner/Spinner';

const Actor = ({ response, loading }) => {
  const movies = response && response.movie_credits.cast;
  return (
    <Page>
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
            .map(movie => (
              <MovieThumb
                key={movie.id}
                clickable
                movie={movie}
                gender={response.gender}
              />
            ))}
        </Grid>
      )}
      {loading && <Spinner />}
      {!movies && !loading && <h1>Not found!</h1>}
    </Page>
  );
};

export default RMDBService(Actor, 'person', null, [
  'images',
  'movie_credits',
  'tv_credits'
]);
