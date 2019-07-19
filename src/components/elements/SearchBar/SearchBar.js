import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SearchBar.css';

class SearchBar extends Component {
  state = {
    value: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    const value = this.state.value.trim();
    const { searchTerm } = this.props.match.params;
    if (value !== '' && value !== searchTerm) {
      this.props.history.push(`/search/${value}`);
    }
  };

  handleInput = ({ target: { value } }) => {
    this.setState({ value });
  };

  selectText = ({ target }) => {
    target.select();
  };

  componentDidMount() {
    const { searchTerm } = this.props.match.params;
    searchTerm && this.setState({ value: searchTerm });
  }

  componentDidUpdate(prevProps) {
    const { searchTerm } = this.props.match.params;
    if (prevProps.match.params.searchTerm !== searchTerm) {
      this.setState({ value: searchTerm });
    }
  }

  render() {
    return (
      <div className='rmdb-searchbar'>
        <div className='rmdb-container'>
          <form className='rmdb-searchbar-form' onSubmit={this.handleSubmit}>
            <label className='rmdb-searchbar-label'>
              <FontAwesomeIcon className='rmdb-searchbar-icon' icon='search' />
              <span className='visually-hidden'>Search</span>
              <input
                type='text'
                name='search'
                className='rmdb-searchbar-input'
                placeholder='Search'
                onFocus={this.selectText}
                onChange={this.handleInput}
                value={this.state.value}
              />
            </label>
            <button className='rmdb-searchbar-submit'>Search</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchBar);
