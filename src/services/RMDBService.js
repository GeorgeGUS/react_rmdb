import React, { Component } from 'react';
import { API_URL, API_KEY, LANG } from '../config';

const RMDBService = (Wrapper, queryParams) => {
  return class extends Component {
    state = {
      movies: [],
      response: null,
      loading: true,
      currentPage: 1,
      totalPages: 1,
      searchTerm: this.props.match.params.searchTerm || ''
    };

    createEndpoint = ({ type, typeId, options }) => {
      const { id } = this.props.match.params;
      const { currentPage, searchTerm } = this.state;
      return `${API_URL}${type}/${typeId ||
        id}?api_key=${API_KEY}&language=${LANG}&append_to_response=${options}&query=${searchTerm}&page=${currentPage}`;
    };

    componentDidMount() {
      this.fetchItems();
    }

    componentDidUpdate(prevProps) {
      const { searchTerm, id } = this.props.match.params;
      if (
        prevProps.match.params.searchTerm !== searchTerm ||
        prevProps.match.params.id !== id
      ) {
        this.updateItems(searchTerm);
      }
    }

    fetchItems = async () => {
      try {
        const response = await (await fetch(
          this.createEndpoint(queryParams)
        )).json();
        if (response.status_code) {
          this.setState({ loading: false });
        } else if (response.results) {
          this.setState(({ movies }) => ({
            movies: [...movies, ...response.results],
            loading: false,
            currentPage: response.page,
            totalPages: response.total_pages
          }));
        } else {
          this.setState({ response, loading: false });
        }
      } catch (e) {
        console.error('Fetch error:', e);
      }
    };

    updateItems = newSearchTerm => {
      this.setState(
        ({ searchTerm }) => ({
          loading: true,
          movies: [],
          searchTerm: newSearchTerm || searchTerm,
          currentPage: 1
        }),
        this.fetchItems
      );
    };

    loadMoreItems = () => {
      this.setState(
        ({ currentPage }) => ({
          loading: true,
          currentPage: currentPage + 1
        }),
        this.fetchItems
      );
    };

    render() {
      return (
        <Wrapper
          {...this.state}
          {...this.props}
          loadMoreItems={this.loadMoreItems}
        />
      );
    }
  };
};

export default RMDBService;
