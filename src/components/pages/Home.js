import React, { Component } from 'react';
// import MetaTags from '../elements/MetaTags/MetaTags';

import {
  API_URL,
  API_KEY,
  LANG,
  getBackdropUrl,
  getPosterUrl,
  setMetaTags
} from '../../config';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import HeroImage from '../elements/HeroImage/HeroImage';
import LoadMoreBtn from '../elements/LoadMoreBtn/LoadMoreBtn';
import MovieThumb from '../elements/MovieThumb/MovieThumb';
import SearchBar from '../elements/SearchBar/SearchBar';
import Spinner from '../elements/Spinner/Spinner';

import './page.css';

class Home extends Component {
  state = {
    movies: [],
    heroImage: null,
    loading: false,
    currentPage: 0,
    totalPages: 0,
    searchTerm: ''
  };

  componentDidMount() {
    // const storedState = localStorage.getItem('HomeState');
    // if (storedState) {
    //   this.setState({ ...JSON.parse(storedState) });
    //   return;
    // }
    this.setState({ loading: true });
    this.fetchItems(this.popularEP(false, ''));
  }

  createEndpoint = type => (loadMore, searchTerm) =>
    `${API_URL}${type}?api_key=${API_KEY}&language=${LANG}&page=${loadMore &&
      this.state.currentPage + 1}&query=${searchTerm}`;

  popularEP = this.createEndpoint('movie/popular');
  searchEP = this.createEndpoint('search/movie');

  updateItems = (loadMore, searchTerm) => {
    this.setState(
      {
        movies: loadMore ? [...this.state.movies] : [],
        loading: true,
        searchTerm: loadMore ? this.state.searchTerm : searchTerm
      },
      () => {
        const { searchTerm: stateSearchTerm } = this.state;
        this.fetchItems(
          !stateSearchTerm
            ? this.popularEP(loadMore, '')
            : this.searchEP(loadMore, stateSearchTerm)
        );
      }
    );
  };

  fetchItems = async endpoint => {
    const { movies, heroImage } = this.state;
    try {
      const response = await (await fetch(endpoint)).json();
      // Setting meta tags
      setMetaTags(
        'RMDB - Popular Movies',
        'React Movie (or RMDB) is a database for searching information about movies and actors',
        getBackdropUrl(response.results[0].backdrop_path)
      );
      this.setState(
        {
          movies: [...movies, ...response.results],
          heroImage: heroImage || response.results[0],
          loading: false,
          currentPage: response.page,
          totalPages: response.total_pages
        },
        () => {
          // if (searchTerm === '') {
          //   localStorage.setItem('HomeState', JSON.stringify(this.state));
          // }
        }
      );
    } catch (e) {
      console.error('Fetch error:', e);
    }
  };

  render() {
    const { loading, movies, heroImage, currentPage, totalPages } = this.state;
    return (
      <div className='rmdb-page'>
        {heroImage && (
          <HeroImage
            image={getBackdropUrl(heroImage.backdrop_path)}
            title={heroImage.original_title}
            text={heroImage.overview}
          />
        )}
        <SearchBar callback={this.updateItems} />
        <FourColGrid header={'Popular Movies'} loading={loading}>
          {movies.map(el => (
            <MovieThumb
              key={el.id}
              clickable
              title={el.title}
              year={el.release_date && el.release_date.slice(0, 4)}
              image={getPosterUrl(el.poster_path)}
              movieId={el.id}
              movieName={el.title}
            />
          ))}
        </FourColGrid>
        {loading && <Spinner />}
        {currentPage < totalPages && !loading && (
          <LoadMoreBtn text='Load More' onClick={this.updateItems} />
        )}
      </div>
    );
  }
}

export default Home;
