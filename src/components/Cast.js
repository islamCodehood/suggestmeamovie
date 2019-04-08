import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import "../App.css";

class Cast extends Component {
  render() {
    const { cast, director } = this.props;
    return (
      <Grid container spacing={0}>
        {cast.map(member => (
          <Grid key={member.personImage} item xs={2} md={2}>
            <img
              src={`https://image.tmdb.org/t/p/original${member.personImage}`}
              className="img-fluid cast"
              alt={member.personName}
            />
            <Typography variant="caption" align="center">
              {member.personName}
            </Typography>
          </Grid>
        ))}
        <Grid key={director.directorImage} item xs={2} md={2}>
        {director.directorImage && <img
            src={`https://image.tmdb.org/t/p/original${director.directorImage}`}
            className="img-fluid cast"
            alt={director.directorName}
        /> }
          <Typography variant="caption" align="center">
            {director.directorName}
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default Cast;
