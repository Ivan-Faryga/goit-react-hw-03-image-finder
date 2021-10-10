import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.props.onSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            name="query"
            value={this.props.query}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.props.handleChange}
          />
        </form>
      </header>
    );
  }
}
export default SearchBar;
