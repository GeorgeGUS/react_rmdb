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
import LoadMoreBtn from '../elements/LoadMoreBtn/LoadMoreBtn';
import MovieThumb from '../elements/MovieThumb/MovieThumb';
import SearchBar from '../elements/SearchBar/SearchBar';
import Spinner from '../elements/Spinner/Spinner';

import './page.css';

class Search extends Component {
  state = {
    movies: [],
    loading: false,
    currentPage: 0,
    totalPages: 0,
    searchTerm: this.props.match.params.searchTerm || ''
  };

  componentDidMount() {
    const { searchTerm } = this.state;
    this.setState({ loading: true });
    this.fetchItems(this.searchEP(false, searchTerm));
  }

  componentDidUpdate(prevProps) {
    const { searchTerm } = this.props.match.params;
    if (prevProps.match.params.searchTerm !== searchTerm) {
      this.updateItems(false, searchTerm);
    }
  }

  createEndpoint = type => (loadMore, searchTerm) =>
    `${API_URL}${type}?api_key=${API_KEY}&language=${LANG}&page=${loadMore &&
      this.state.currentPage + 1}&query=${searchTerm}`;

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
        this.fetchItems(this.searchEP(loadMore, stateSearchTerm));
      }
    );
  };

  fetchItems = async endpoint => {
    const { movies } = this.state;
    try {
      const result = await (await fetch(endpoint)).json();
      this.setState({
        movies: [...movies, ...result.results],
        loading: false,
        currentPage: result.page,
        totalPages: result.total_pages
      });
    } catch (e) {
      console.error('Fetch error:', e);
    }
  };

  render() {
    const { loading, searchTerm, movies, currentPage, totalPages } = this.state;
    const gridHeader = `Search results for "${searchTerm}"`;
    return (
      <div className='rmdb-page'>
        <SearchBar callback={this.updateItems} />
        <div className='rmdb-container'>
          <FourColGrid header={gridHeader} loading={loading}>
            {movies.map(el => (
              <MovieThumb
                key={el.id}
                clickable
                title={el.title}
                year={el.release_date && el.release_date.slice(0, 4)}
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

export default Search;