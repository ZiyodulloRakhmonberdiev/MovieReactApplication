import { Component } from "react";
import Loader from "../components/Loader";
import Movies from "../components/Movies";
import Search from "../components/Search";
export default class Main extends Component {
  state = {
    movies: [],
    loading: true,
  };
  componentDidMount() {
    fetch(`https://www.omdbapi.com/?apikey=329ffa13&s=iron`)
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  }
  searchMovie = (str, type = "all") => {
    this.setState({ loading: true });
    fetch(
      `https://www.omdbapi.com/?apikey=329ffa13&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  };
  render() {
    return (
      <div className="main__content">
        <Search searchMovie={this.searchMovie} />
        {this.state.loading ? (
          <Loader />
        ) : (
          <Movies key={this.imdbID} movies={this.state.movies} />
        )}
      </div>
    );
  }
}
