import React, { Component } from 'react';
import MetaTags from '../elements/MetaTags/MetaTags';
import RMDBService from '../../services/RMDBService';

import { getPosterUrl } from '../../config';
import Actor from '../elements/Actor/Actor';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import MovieInfo from '../elements/Info/MovieInfo';
import MovieInfoBar from '../elements/InfoBar/MovieInfoBar';
import Breadcrumbs from '../elements/Breadcrumbs/Breadcrumbs';
import Spinner from '../elements/Spinner/Spinner';

import './page.css';

class Movie extends Component {
  render() {
    const { response, loading } = this.props;
    const actors = response && response.credits.cast;
    return (
      <main className='rmdb-page'>
        {response && (
          <>
            <MetaTags
              title={`RMDB - "${response.title}"`}
              desc={response.overview}
              image={getPosterUrl(response.poster_path)}
            />
            <Breadcrumbs title={response.title} />
            <MovieInfo movie={response} />
            <MovieInfoBar movie={response} />
          </>
        )}
        {actors && (
          <FourColGrid header={'Actors'} loading={loading} isActors>
            {actors.map(actor => (
              <Actor key={actor.name} actor={actor} />
            ))}
          </FourColGrid>
        )}
        {loading && <Spinner />}
        {!actors && !loading && <h1>No actor found!</h1>}
      </main>
    );
  }
}

export default RMDBService(Movie, 'movie', null, ['credits', 'videos']);
