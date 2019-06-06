import React, { Component } from 'react';
import { API_URL, API_KEY, LANG } from '../../config';
import Navigation from '../elements/Navigation/Navigation';
import MovieInfo from '../elements/MovieInfo/MovieInfo';
import MovieInfoBar from '../elements/MovieInfoBar/MovieInfoBar';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import Actor from '../elements/Actor/Actor';
import Spinner from '../elements/Spinner/Spinner';
import './Movie.css';
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
      <div className='rmdb-movie'>
        {movie && (
          <div>
            <Navigation title={movie.title} />
            <MovieInfo movie={movie} directors={directors} />
            <MovieInfoBar movie={movie} />
          </div>
        )}
        {actors && (
          <div className='rmdb-movie-grid'>
            <FourColGrid header={'Actors'}>
              {actors.map(actor => (
                <Actor key={actor.name} actor={actor} />
              ))}
            </FourColGrid>
          </div>
        )}
        {loading && <Spinner />}
        {!actors && !loading && <h1>No movie found!</h1>}
      </div>
    );
  }
}

export default Movie;
