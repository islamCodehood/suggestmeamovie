import React, { Component } from "react";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Suggestion from "./components/Suggestion";
import AppFooter from "./components/AppFooter";
import Favs from "./components/Favs";
import NoFavs from "./components/NoFavs";
import FailedRequest from "./components/FailedRequest";
import NotHere from "./components/NotHere";
import { Link } from "react-router-dom";

class App extends Component {
  state = {
    movie: {},
    genres: [],
    cast: [],
    director: {},
    posterSrc: "",
    favs: [],
  };

  componentDidMount() {
    this.getMovie();
    var savedFavs = JSON.parse(localStorage.getItem("favMovies"));
    this.setState({
      favs: savedFavs
    });
  }
  shuffle = endNum => {
    let random = Math.floor(Math.random() * endNum) + 1;
    return random;
  };
  getMovie = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=6528ff68dbc27d13fb177793f4c69f9d&language=en-US&page=${this.shuffle(
        989
      )}`
    )
      .then(response =>{ 
        console.log(response.status)
        return response.json()
      })
      .then(data => {
        const movie = data.results[`${this.shuffle(20)}`];
        this.setState({
          movie
        });
        return movie;
      })
      .then(movie => {
        if (movie) {
          this.getPoster(movie);
          this.getReleaseYear(movie);
          this.getCast(movie);
          this.getGenreList(movie);
          setTimeout(() => {
            if (this.state.favs) {
              this.checkIfLiked(movie);
            }
          }, 2000);
        }
      })
      .catch(error => {
        console.log(error);
        const linkToFailedRequest = document.getElementById("failed-request");
        linkToFailedRequest.click();
      });
  };

  getGenreList = movie => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=6528ff68dbc27d13fb177793f4c69f9d&language=en-US`
    )
      .then(data => data.json())
      .then(genreList => this.getGenre(genreList, movie))
      .catch(error => {
        console.log(error);
        const linkToFailedRequest = document.getElementById("failed-request");
        linkToFailedRequest.click();
      });
  };

  getGenre = (genreList, movie) => {
    this.setState({
      genres: genreList.genres.filter(genre =>
        movie.genre_ids.includes(genre.id)
      )
    });
  };

  getPoster = movie => {
    const posterSrc = `https://image.tmdb.org/t/p/w400${movie.poster_path}`;
    this.setState({
      posterSrc
    });
  };

  getReleaseYear = movie => {
    const releaseYear = movie.release_date.substring(0, 4)
    this.setState({
      releaseYear,
    })
  }

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
              return false;
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
        console.log(error);
        const linkToFailedRequest = document.getElementById("failed-request");
        linkToFailedRequest.click();
      });
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

  checkIfLiked = movie => {
    if (this.state.favs.includes(movie.id)) {
      this.isLikedState("liked");
    } else {
      this.isLikedState("unliked");
    }
  };

  isLikedState = state =>
    this.setState({
      isLiked: state
    });

  toggleLike = () => {
    if (this.state.isLiked === "liked") {
      this.removeFav(this.state.movie.id);
    } else {
      this.saveFav(this.state.movie.id);
    }
    this.setState({
      isLiked: this.state.isLiked === "liked" ? "unliked" : "liked"
    });
  };
  unlikeFav = movieId => {
    this.removeFav(movieId);
  };
  saveFav = movieId => {
    if (typeof Storage !== "undefined") {
      if (localStorage.getItem("favMovies")) {
        this.setState(prevState => ({
          favs: prevState.favs.concat(movieId)
        }));
        setTimeout(() => {
          localStorage.setItem("favMovies", JSON.stringify(this.state.favs));
        }, 100);
      } else {
        this.setState({
          favs: [movieId]
        });
        setTimeout(() => {
          localStorage.setItem("favMovies", JSON.stringify(this.state.favs));
        }, 100);
      }
    }
  };

  removeFav = movieId => {
    if (typeof Storage !== "undefined") {
      console.log(this.state.favs, movieId);
      const movieIdNumber = Number(movieId);
      this.setState(prevState => ({
        favs: prevState.favs.filter(
          savedMovieId => movieIdNumber !== savedMovieId
        )
      }));
      setTimeout(() => {
        localStorage.setItem("favMovies", JSON.stringify(this.state.favs));
      }, 4000);
    }
  };

  render() {
    const {
      movie,
      genres,
      posterSrc,
      cast,
      director,
      isLiked,
      favs,
      releaseYear,
    } = this.state;
    
    return (
      <div className="App">
        <Header refreshPage={this.getMovie} />

        <div className="views">
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return (
                  movie && (
                    <Suggestion
                      movieTitle={movie.title}
                      rating={movie.vote_average}
                      genres={genres}
                      poster={posterSrc}
                      overview={movie.overview}
                      cast={cast}
                      director={director}
                      movieId={movie.id}
                      toggleLike={this.toggleLike}
                      isLiked={isLiked}
                      releaseYear={releaseYear}
                    />
                  )
                );
              }}
            />
            <Route
              path="/favs"
              render={() => {
                if (!favs || !favs.length) {
                  return <NoFavs refreshPage={this.getMovie} />;
                } else {
                  return (
                    <Favs favedMoviesIds={favs} unlikeFav={this.unlikeFav} />
                  );
                }
              }}
            />
            <Route
              path="/failed-request"
              render={() => (
                <FailedRequest id="failed" refreshPage={this.getMovie} />
              )}
            />
            <Route render={() => <NotHere refreshPage={this.getMovie} />} />
          </Switch>
        </div>
        <Link to="/failed-request" id="failed-request" />
        <AppFooter />
      </div>
    );
  }
}

export default App;
