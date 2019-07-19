import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SearchBar.css';

class SearchBar extends Component {
  state = {
    value: ''
  };

  timeout = null;

  handleSubmit = () => {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      const { onSubmit, history } = this.props;
      const value = this.state.value.trim();
      if (value !== '') {
        onSubmit(false);
        history.push(`/search/${value}`);
      }
    }, 1000);
  };

  doSearch = ({ target: { value } }) => {
    this.setState({ value }, this.handleSubmit);
  };

  componentDidMount() {
    const { searchTerm } = this.props.match.params;
    searchTerm && this.setState({ value: searchTerm });
  }

  componentDidUpdate(prevProps) {
    const { searchTerm } = this.props.match.params;
    if (searchTerm && prevProps.match.params.searchTerm !== searchTerm) {
      this.setState({ value: searchTerm });
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    return (
      <div className='rmdb-searchbar'>
        <div className='rmdb-container'>
          <label className='rmdb-searchbar-label'>
            <FontAwesomeIcon className='rmdb-searchbar-icon' icon='search' />
            <span className='visually-hidden'>Search</span>
            <input
              type='text'
              name='search'
              className='rmdb-searchbar-input'
              placeholder='Search'
              onChange={this.doSearch}
              value={this.state.value}
            />
          </label>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchBar);
