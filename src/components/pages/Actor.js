import React from 'react';
import MetaTags from '../elements/MetaTags/MetaTags';
import RMDBService from '../../services/RMDBService';

import { getPosterUrl } from '../../config';
import Page from '../elements/Page/Page';
import Breadcrumbs from '../elements/Breadcrumbs/Breadcrumbs';
import ActorInfo from '../elements/Info/ActorInfo';
import ActorInfoBar from '../elements/InfoBar/ActorInfoBar';
import Grid from '../elements/Grid/Grid';
import { MovieThumb } from '../elements/Thumbs';
import Spinner from '../elements/Spinner/Spinner';

const Actor = ({ response, loading }) => {
  const movies =
    response && response.movie_credits && response.movie_credits.cast;
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
        <Grid title={`${movies.length} Movies with ${response.name}`}>
          {movies
            .sort((a, b) => {
              return new Date(b.release_date) - new Date(a.release_date);
            })
            .map(movie => (
              <MovieThumb key={movie.id} movie={movie} />
            ))}
        </Grid>
      )}
      {loading && <Spinner />}
      {!movies && !loading && <h1>Not found!</h1>}
    </Page>
  );
};

const queryParams = {
  type: 'person',
  options: ['images', 'movie_credits', 'tv_credits']
};

export default RMDBService(Actor, queryParams);
