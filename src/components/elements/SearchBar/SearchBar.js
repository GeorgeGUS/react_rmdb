import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import './SearchBar.css';

class SearchBar extends Component {
  state = {
    value: ''
  };

  timeout = null;

  doSearch = ({ target: { value } }) => {
    const { callback, history } = this.props;

    this.setState({ value });
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      const value = this.state.value.trim();
      callback(false, value);
      history.push(`/search/${value}`);
    }, 750);
  };

  render() {
    return (
      <div className='rmdb-searchbar'>
        <div className='rmdb-container'>
          <label className='rmdb-searchbar-label'>
            <FontAwesome className='rmdb-fa-search' name='search' size='2x' />
            <input
              type='text'
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
