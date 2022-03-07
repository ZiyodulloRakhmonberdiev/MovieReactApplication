import { Component } from "react";
export default class Search extends Component {
  state = { search: "iron", type: "all" };
  handleClick = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovie(this.state.search, this.state.type);
    }
  };
  handleFilter = (e) => {
    this.setState(
      () => ({ type: e.target.dataset.type }),
      () => {
        this.props.searchMovie(this.state.search, this.state.type);
      }
    );
  };
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input
              id="email_inline"
              type="search"
              className="validate"
              placeholder="Search"
              value={this.state.search}
              onKeyDown={this.handleClick}
              onChange={(event) =>
                this.setState({ search: event.target.value })
              }
            />
            <button
              onClick={() =>
                this.props.searchMovie(this.state.search, this.state.type)
              }
              className="btn search-btn"
            >
              Search
            </button>
            <div>
              <label>
                <input
                  className="with-gap"
                  name="type"
                  type="radio"
                  data-type="all"
                  onChange={this.handleFilter}
                  checked={this.state.type === "all"}
                />
                <span>All</span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="type"
                  type="radio"
                  data-type="movie"
                  checked={this.state.type === "movie"}
                  onChange={this.handleFilter}
                />
                <span>Movies </span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="type"
                  type="radio"
                  data-type="series"
                  checked={this.state.type === "series"}
                  onChange={this.handleFilter}
                />
                <span>Series </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
