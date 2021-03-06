import React from 'react';
import MetaTags from '../elements/MetaTags/MetaTags';
import RMDBService from '../../services/RMDBService';

import { getPosterUrl } from '../../config';
import Page from '../elements/Page/Page';
import Actor from '../elements/Actor/Actor';
import Grid from '../elements/Grid/Grid';
import MovieInfo from '../elements/Info/MovieInfo';
import MovieInfoBar from '../elements/InfoBar/MovieInfoBar';
import Breadcrumbs from '../elements/Breadcrumbs/Breadcrumbs';
import Spinner from '../elements/Spinner/Spinner';

const Movie = ({ response, loading }) => {
  const actors = response && response.credits && response.credits.cast;
  return (
    <Page>
      {response && (
        <>
          <MetaTags
            title={`RMDB - "${response.title}"`}
            desc={response.overview}
            image={getPosterUrl(response.poster_path)}
          />
          <Breadcrumbs title={response.title} />
          <MovieInfo {...response} />
          <MovieInfoBar {...response} />
        </>
      )}
      {actors && (
        <Grid title='Actors'>
          {actors.map(actor => (
            <Actor key={actor.name} actor={actor} />
          ))}
        </Grid>
      )}
      {loading && <Spinner />}
      {!actors && !loading && <h1>Not found!</h1>}
    </Page>
  );
};

const queryParams = {
  type: 'movie',
  options: ['credits', 'videos']
};

export default RMDBService(Movie, queryParams);
