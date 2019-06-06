import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './SearchBar.css';

class SearchBar extends Component {
  state = {
    value: ''
  };

  timeout = null;

  doSearch = e => {
    const { callback } = this.props;
    this.setState({ value: e.target.value });
    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      callback(false, this.state.value);
    }, 750);
  };

  render() {
    return (
      <div className='rmdb-searchbar'>
        <div className='rmdb-searchbar-content'>
          <FontAwesome className='rmdb-fa-search' name='search' size='2x' />
          <input
            type='text'
            className='rmdb-searchbar-input'
            placeholder='Search'
            onChange={this.doSearch}
            value={this.state.value}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
