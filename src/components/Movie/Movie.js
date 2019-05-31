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
    this.setState({ loading: true });
    // Fisrt fetch the movie...
    const endpoint = `${API_URL}movie/${
      this.props.match.params.movieId
    }?api_key=${API_KEY}&language=${LANG}`;
    this.fetchItems(endpoint);
  }

  fetchItems = endpoint => {
    fetch(endpoint)
      .then(res => res.json())
      .then(res => {
        if (res.status_code) {
          this.setState({ loading: false });
        } else {
          this.setState({ movie: res }, () => {
            // ... then fetch actors in the setState cb function
            const endpoint = `${API_URL}movie/${
              this.props.match.params.movieId
            }/credits?api_key=${API_KEY}`;
            fetch(endpoint)
              .then(res => res.json())
              .then(res => {
                const directors = res.crew.filter(
                  member => member.job === 'Director'
                );
                this.setState({ actors: res.cast, directors, loading: false });
              });
          });
        }
      })
      .catch(err => console.error('Error:', err));
  };

  render() {
    const { movie, directors, actors, loading } = this.state;
    return (
      <div className='rmdb-movie'>
        {movie && (
          <div>
            <Navigation movie={movie} />
            <MovieInfo movie={movie} directors={directors} />
            <MovieInfoBar movie={movie} />
          </div>
        )}
        {actors && (
          <div className='rmdb-movie-grid'>
            <FourColGrid header={'Actors'}>
              {actors.map(el => (
                <Actor key={el.name} actor={el} />
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
