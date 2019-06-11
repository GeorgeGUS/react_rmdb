import React, { Component } from 'react';

import {
  API_URL,
  API_KEY,
  LANG,
  IMAGE_BASE_URL,
  NO_IMAGE_URL,
  POSTER_SIZE
} from '../../config';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import ActorInfo from '../elements/ActorInfo/ActorInfo';
import ActorInfoBar from '../elements/ActorInfoBar/ActorInfoBar';
import Navigation from '../elements/Navigation/Navigation';
import MovieThumb from '../elements/MovieThumb/MovieThumb';
import Spinner from '../elements/Spinner/Spinner';

import './page.css';

class Actor extends Component {
  state = {
    actor: null,
    movies: null,
    loading: false
  };

  componentDidMount() {
    const { actorId } = this.props.match.params;
    const storedState = localStorage.getItem(`actor_${actorId}`);
    if (storedState) {
      this.setState({ ...JSON.parse(storedState) });
      return;
    }
    this.setState({ loading: true });
    // Fisrt fetch the person...
    const endpoint = `${API_URL}person/${actorId}?api_key=${API_KEY}&language=${LANG}`;
    this.fetchItems(endpoint);
  }

  fetchItems = async endpoint => {
    const { actorId } = this.props.match.params;
    try {
      const result = await (await fetch(endpoint)).json();
      if (result.status_code) {
        this.setState({ loading: false });
      } else {
        this.setState({ actor: result });
        // ... then fetch actors in the setState cb function
        const actorEndpoint = `${API_URL}person/${actorId}/movie_credits?api_key=${API_KEY}`;
        const { cast } = await (await fetch(actorEndpoint)).json();
        this.setState(
          {
            movies: cast,
            loading: false
          },
          () => {
            localStorage.setItem(
              `actor_${actorId}`,
              JSON.stringify(this.state)
            );
          }
        );
      }
    } catch (e) {
      console.error('Fetch error:', e);
    }
  };

  render() {
    const { actor, movies, loading } = this.state;
    return (
      <div className='rmdb-page'>
        {actor && (
          <div>
            <Navigation title={actor.name} />
            <ActorInfo actor={actor} />
            <ActorInfoBar actor={actor} />
          </div>
        )}
        {movies && (
          <div className='rmdb-page-grid'>
            <FourColGrid header={`Movies with ${actor.name}`} loading={loading}>
              {movies.map(el => (
                <MovieThumb
                  key={el.id}
                  clickable
                  title={el.title}
                  image={
                    el.poster_path
                      ? `${IMAGE_BASE_URL}${POSTER_SIZE}${el.poster_path}`
                      : NO_IMAGE_URL
                  }
                  movieId={el.id}
                  movieName={el.title}
                />
              ))}
            </FourColGrid>
          </div>
        )}
        {loading && <Spinner />}
        {!movies && !loading && <h1>Not found!</h1>}
      </div>
    );
  }
}

export default Actor;
