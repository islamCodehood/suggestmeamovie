import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import "../App.css";
import Poster from './Poster'
import MovieTitle from './MovieTitle'
import Genres from './Genres'
import Overview from './Overview'
import Cast from './Cast'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  actorImage: {
    maxHeight: "85px",
    minHeight: "85px"
  },
  img: {
    height: "100%",
    maxWidth: "100%"
  }
});

class Suggestion extends Component {
  render() {
    const {
      classes,
      movieTitle,
      rating,
      overview,
      genres,
      poster,
      cast,
      director
    } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item sm={12} md={4}>
            <div className="mobile-display">
             <MovieTitle rating={rating} movieTitle={movieTitle} />
              <Genres genres={genres} />
            </div>
            <Poster poster={poster} />
          </Grid>
          <Grid item sm={12} md={8} className="text-left">
            <div className="non-mobile-display">
              <MovieTitle rating={rating} movieTitle={movieTitle} />
              <Genres genres={genres} />
            </div>
            <Overview overview={overview} />
            <Cast cast={cast} director={director} />
          </Grid>
        </Grid>
        <br />
      </div>
    );
  }
}

export default withStyles(styles)(Suggestion);
