import React, { Component } from "react";
import "../App.css";
import "../Animate.css";
import { withStyles } from "@material-ui/core/styles";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
const styles = theme => ({
    img: {
      height: "100%",
      maxWidth: "100%"
    }
  });

class Poster extends Component {


  handleClick = () => this.props.toggleLike()

    render() {
        const { poster, movieTitle, isLiked } = this.props
        return (
            <div className="poster-wrapper">
               <img
                  src={poster}
                  className="img-fluid mt-xs-2 mt-sm-4 mt-lg-5 poster animated fadeIn fast"
                  alt={movieTitle}
                />
                 {isLiked === "liked" ? (
                  <Favorite color="secondary" className="cliked-fav-icon animated fadeIn slow" onClick={this.handleClick} />
                ): isLiked === "unliked" ? (
                  <FavoriteBorder color="secondary" className="fav-icon animated fadeIn slow" onClick={this.handleClick} />
                ): null}
                  
            </div>
        )
    }
}

export default withStyles(styles)(Poster);
