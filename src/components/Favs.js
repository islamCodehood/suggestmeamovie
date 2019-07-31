import React, { Component } from "react";
import Favorite from "@material-ui/icons/Favorite";
import "../App.css";

class Favs extends Component {
  componentDidMount() {
    setTimeout(() => {
      return this.props.favedMoviesIds.map(movieId =>
        fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=6528ff68dbc27d13fb177793f4c69f9d&language=en-US`
        )
          .then(response => response.json())
          .then(data =>
            this.getMovieDetails(data.poster_path, movieId, data.title)
          )
          .catch(error => {
            console.log(error);
            const linkToFailedRequest = document.getElementById(
              "failed-request"
            );
            linkToFailedRequest.click();
          })
      );
    }, 3000);
  }

  state = {
    movies: []
  };

  handleClick = e => {
    const targetId = Number(e.target.parentElement.id);
    this.setState(prevState => ({
      movies: prevState.movies.filter(movie => movie.movieId !== targetId)
    }));
    if (!e.target.id) {
      this.props.unlikeFav(e.target.parentElement.id);
    } else {
      this.props.unlikeFav(e.target.id);
      console.log(e.target.id);
    }
  };
  getMovieDetails = (posterPath, movieId, title) => {
    this.setState(prevState => ({
      movies: prevState.movies.concat({
        posterPath: `https://image.tmdb.org/t/p/w200/${posterPath}`,
        movieId,
        title
      })
    }));
  };

  render() {
    const { movies } = this.state;
    return (
      <div className="container-fluid py-5 w-100 fav-wrapper">
        <div className="row justify-content-around no-gutters">
          {movies.map(movie => (
            <div
              key={movie.movieId}
              className="col-12 col-md-4 text-center mb-3 mb-md-2 movie-card"
            >
              <img
                src={movie.posterPath}
                className="w-100 h-100 animated fadeIn fast"
                alt={movie.title}
                title={movie.title}
                data-id={movie.movieId}
              />
              <Favorite
                color="secondary"
                id={movie.movieId}
                onClick={this.handleClick}
                className="fav-icon animated fadeIn slow"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Favs;
