import React, { Component } from "react";
import "../App.css";
import { withStyles } from "@material-ui/core/styles";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
    img: {
      height: "100%",
      maxWidth: "100%"
    }
  });

class Poster extends Component {


  handleClick = () => {
    /* this.setState(prevState => ({
      isLiked: !prevState.isLiked
    })) */
    this.props.toggleLike()
    
  }

  /* saveFav = (movieId) => {

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
  } */
    render() {
        const { poster, movieTitle, isLiked } = this.props
        return (
            <div className="poster-wrapper">
                <img
                  src={poster}
                  className="img-fluid mt-xs-2 mt-sm-4 mt-lg-5 poster"
                  alt={movieTitle}
                />
                {isLiked ? (
                  <Favorite color="secondary" className="cliked-fav-icon" onClick={this.handleClick} />
                ): (
                  <FavoriteBorder color="secondary" className="fav-icon" onClick={this.handleClick} />
                )}
                  
            </div>
        )
    }
}

export default withStyles(styles)(Poster);
