import React, { Component } from 'react';
import { API_URL, API_KEY, LANG } from '../config';

const RMDBService = (Wrapped, ...queryProps) => {
  return class extends Component {
    state = {
      movies: [],
      response: null,
      loading: false,
      currentPage: 1,
      totalPages: 1,
      searchTerm: this.props.match.params.searchTerm || ''
    };

    _endpoint = '';

    createEndpoint = (type, typeId, options) => () => {
      const { id } = this.props.match.params;
      const { currentPage, searchTerm } = this.state;
      return `${API_URL}${type}/${typeId ||
        id}?api_key=${API_KEY}&language=${LANG}&append_to_response=${options}&query=${searchTerm}&page=${currentPage}`;
    };

    componentDidMount() {
      this._endpoint = this.createEndpoint(...queryProps);
      this.fetchItems();
    }

    componentDidUpdate(prevProps) {
      const { searchTerm } = this.props.match.params;
      if (prevProps.match.params.searchTerm !== searchTerm) {
        this.updateItems(false, searchTerm);
      }
    }

    fetchItems = async () => {
      this.setState({ loading: true });
      try {
        const response = await (await fetch(this._endpoint())).json();
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

    updateItems = (loadMore, newSearchTerm) => {
      this.setState(
        ({ movies, searchTerm, currentPage }) => ({
          movies: loadMore ? [...movies] : [],
          loading: true,
          searchTerm: loadMore ? searchTerm : newSearchTerm,
          currentPage: loadMore ? currentPage + 1 : 1
        }),
        this.fetchItems
      );
    };

    render() {
      return (
        <Wrapped
          {...this.state}
          {...this.props}
          updateItems={this.updateItems}
        />
      );
    }
  };
};

export default RMDBService;
