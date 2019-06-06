import React, { Component } from 'react';
import {
  API_URL,
  API_KEY,
  LANG,
  IMAGE_BASE_URL,
  NO_IMAGE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE
} from '../../config';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import HeroImage from '../elements/HeroImage/HeroImage';
import LoadMoreBtn from '../elements/LoadMoreBtn/LoadMoreBtn';
import MovieThumb from '../elements/MovieThumb/MovieThumb';
import SearchBar from '../elements/SearchBar/SearchBar';
import Spinner from '../elements/Spinner/Spinner';

import './Home.css';

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
    const storedState = localStorage.getItem('HomeState');
    if (storedState) {
      this.setState({ ...JSON.parse(storedState) });
      return;
    }
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
    const { movies, heroImage, searchTerm } = this.state;
    try {
      const result = await (await fetch(endpoint)).json();
      this.setState(
        {
          movies: [...movies, ...result.results],
          heroImage: heroImage || result.results[0],
          loading: false,
          currentPage: result.page,
          totalPages: result.total_pages
        },
        () => {
          if (searchTerm === '') {
            localStorage.setItem('HomeState', JSON.stringify(this.state));
          }
        }
      );
    } catch (e) {
      console.error('Fetch error:', e);
    }
  };

  render() {
    const {
      loading,
      searchTerm,
      movies,
      heroImage,
      currentPage,
      totalPages
    } = this.state;
    const gridHeader = searchTerm ? 'Search Result' : 'Popular Movies';
    return (
      <div className='rmdb-home'>
        {heroImage && (
          <div>
            <HeroImage
              image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${
                heroImage.backdrop_path
              }`}
              title={heroImage.original_title}
              text={heroImage.overview}
            />
            <SearchBar callback={this.updateItems} />
          </div>
        )}
        <div className='rmdb-home-grid'>
          <FourColGrid header={gridHeader} loading={loading}>
            {movies.map(el => (
              <MovieThumb
                key={el.id}
                clickable
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
          {loading && <Spinner />}
          {currentPage < totalPages && !loading && (
            <LoadMoreBtn text='Load More' onClick={this.updateItems} />
          )}
        </div>
      </div>
    );
  }
}

export default Home;
