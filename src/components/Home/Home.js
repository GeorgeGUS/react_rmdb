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
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=${LANG}&page=1`;
    this.fetchItems(endpoint);
  }

  searchItems = searchTerm => {
    let endpoint = '';
    this.setState({
      movies: [],
      loading: true,
      searchTerm
    });
    if (searchTerm === '') {
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=${LANG}&page=1`;
    } else {
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=${LANG}&query=${searchTerm}`;
    }
    this.fetchItems(endpoint);
  };

  loadMoreItems = () => {
    let endpoint = '';
    this.setState({ loading: true });
    if (this.state.searchTerm === '') {
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=${LANG}&page=${this
        .state.currentPage + 1}`;
    } else {
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=${LANG}&query=${
        this.state.searchTerm
      }&page=${this.state.currentPage + 1}`;
    }
    this.fetchItems(endpoint);
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
            <SearchBar callback={this.searchItems} />
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
            <LoadMoreBtn text='Load More' onClick={this.loadMoreItems} />
          )}
        </div>
      </div>
    );
  }
}

export default Home;
