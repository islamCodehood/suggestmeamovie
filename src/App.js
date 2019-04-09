import React, { Component, Suspense } from "react";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Suggestion from "./components/Suggestion";
import AppFooter from "./components/AppFooter";

class App extends Component {
  state = {
    movie: {},
    trailerKey: "",
    genres: [],
    cast: [],
    director: {},
    posterSrc: "",
    isLiked: false,
  };

  componentDidMount() {
    this.getMovie();
  }
  shuffle = endNum => {
    let random = Math.floor(Math.random() * endNum) + 1;
    return random;
  };
  getMovie = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=6528ff68dbc27d13fb177793f4c69f9d&language=en-US&page=${this.shuffle(
        900
      )}`
    )
      .then(data => data.json())
      .then(data => {
        const movie = data.results[`${this.shuffle(20)}`];
        this.setState({
          movie
        });
        return movie;
      })
      .then(movie => {
        this.getPoster(movie);
        this.getCast(movie);
        this.getGenreList(movie);
      })
      .catch(error => {
        console.log(error);
      });
  };

  getGenreList = movie => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=6528ff68dbc27d13fb177793f4c69f9d&language=en-US`
    )
      .then(data => data.json())
      .then(genreList => this.getGenre(genreList, movie));
  };

  getGenre = (genreList, movie) => {
    this.setState({
      genres: genreList.genres.filter(genre =>
        movie.genre_ids.includes(genre.id)
      )
    });
  };

  getPoster = movie => {
    this.setState({
      posterSrc: ""
    });
    const posterSrc = `https://image.tmdb.org/t/p/original/${
      movie.poster_path
    }`;
    this.setState({
      posterSrc
    });
  };

  getTrailer = () => {
    fetch(
      `://api.themoviedb.org/3/movie/${
        this.state.movie.id
      }/videos?api_key=6528ff68dbc27d13fb177793f4c69f9d`
    )
      .then(data => data.json())
      .then(trailer => console.log(trailer))
      .catch(error => {
        console.log(error);
      });
  };

  getCast = movie => {
    this.setState({
      cast: []
    });
    this.setState({
      director: {}
    });
    fetch(
      `https://api.themoviedb.org/3/movie/${
        movie.id
      }/casts?api_key=6528ff68dbc27d13fb177793f4c69f9d`
    )
      .then(response => response.json())
      .then(data => {
        data.cast.map(person => {
          const personImage = person.profile_path;
          const personName = person.name;
          if (personImage && personName) {
            if (this.state.cast.length > 4) {
              return;
            } else {
              this.setState(prevState => ({
                cast: prevState.cast.concat({
                  personImage,
                  personName
                })
              }));
            }
          }
        });
        if (data.crew) {
          const directorImage = data.crew[0].profile_path;
          const directorName = data.crew[0].name;
          if (directorImage && directorName) {
            this.setState({
              director: {
                directorImage,
                directorName
              }
            });
          }
        }
      })
      .catch(error => {
        console.log(error)
      })
  };
  handleClick = () => {
    if (this.state.currentPage === "suggestion") {
      this.setState({
        currentPage: "search"
      });
    } else {
      this.setState({
        currentPage: "suggestion"
      });
    }
  };

  toggleLike = () => {
    if (this.state.isLiked) {
      this.removeFav(this.state.movie.id)
    } else {
      this.saveFav(this.state.movie.id)
    }
    this.setState(prevState => ({
      isLiked: !prevState.isLiked
    })) 
  }
  saveFav = (movieId) => {

    if(typeof(Storage) !== "undefined") {
      if (localStorage.getItem("favMovies")) {
        var savedFavs = JSON.parse(localStorage.getItem("favMovies"))
        console.log(savedFavs)
        var newSavedFavs = savedFavs.concat(movieId)
        localStorage.setItem("favMovies", JSON.stringify(newSavedFavs))
      } else {
        var newSavedFavs = [movieId]
        localStorage.setItem("favMovies", JSON.stringify(newSavedFavs))
      }
      
    }
  }

  removeFav = (movieId) => {
    if(typeof(Storage) !== "undefined") {
      var savedFavs = JSON.parse(localStorage.getItem("favMovies"))
      var newSavedFavs =  savedFavs.filter(savedMovieId => movieId !== savedMovieId)
      localStorage.setItem("favMovies", JSON.stringify(newSavedFavs))
    }
    console.log(savedFavs)
  }
  render() {
    const { movie, trailerKey, genres, posterSrc, cast, director, isLiked } = this.state;
    return (
      <div className="App">
        <Header refreshPage={this.getMovie} />
        
        <div className="views">
          <Switch>
            <Route
              exact
              path="/"
              render={() =>{ return  movie && (
              
                <Suggestion
                  movieTitle={movie.title}
                  rating={movie.vote_average}
                  genres={genres}
                  poster={posterSrc}
                  overview={movie.overview}
                  cast={cast}
                  director={director}
                  trailerKey={trailerKey}
                  movieId={movie.id}
                  toggleLike={this.toggleLike}
                  isLiked={isLiked}
                />
                
              )}}
            />
          </Switch>
        </div>
        
        <AppFooter />
      </div>
    );
  }
}

export default App;
