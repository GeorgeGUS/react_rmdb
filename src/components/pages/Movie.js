import React, { Component } from 'react';
import MetaTags from '../elements/MetaTags/MetaTags';

import { API_URL, API_KEY, LANG, getPosterUrl } from '../../config';
import Actor from '../elements/Actor/Actor';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import MovieInfo from '../elements/Info/MovieInfo';
import MovieInfoBar from '../elements/InfoBar/MovieInfoBar';
import Breadcrumbs from '../elements/Breadcrumbs/Breadcrumbs';
import Spinner from '../elements/Spinner/Spinner';

import './page.css';

class Movie extends Component {
  state = {
    movie: null,
    actors: null,
    directors: [],
    loading: false
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    const storedState = localStorage.getItem(`${movieId}`);
    if (storedState) {
      this.setState({ ...JSON.parse(storedState) });
      return;
    }
    this.setState({ loading: true });
    // Fisrt fetch the movie...
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=${LANG}`;
    this.fetchItems(endpoint);
  }

  fetchItems = async endpoint => {
    const { movieId } = this.props.match.params;
    try {
      const result = await (await fetch(endpoint)).json();
      if (result.status_code) {
        this.setState({ loading: false });
      } else {
        this.setState({ movie: result });
        // ... then fetch actors in the setState cb function
        const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
        const { crew, cast } = await (await fetch(creditsEndpoint)).json();
        const directors = crew.filter(member => member.job === 'Director');
        this.setState(
          {
            actors: cast,
            directors,
            loading: false
          },
          () => {
            localStorage.setItem(`${movieId}`, JSON.stringify(this.state));
          }
        );
      }
    } catch (e) {
      console.error('Fetch error:', e);
    }
  };

  render() {
    const { movie, directors, actors, loading } = this.state;
    return (
      <main className='rmdb-page'>
        {movie && (
          <>
            <MetaTags
              title={`RMDB - "${movie.title}"`}
              desc={movie.overview}
              image={getPosterUrl(movie.poster_path)}
            />
            <Breadcrumbs title={movie.title} />
            <MovieInfo movie={movie} directors={directors} />
            <MovieInfoBar movie={movie} />
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
        {!actors && !loading && <h1>No movie found!</h1>}
      </main>
    );
  }
}

export default Movie;
