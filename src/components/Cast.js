import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import "../App.css";
import "../Animate.css";

const Cast = (props) => {
    const { cast, director } = props;
    return (
      <Grid container spacing={0} className="cast-wrapper">
        {cast.map(member => (
          <Grid key={member.personImage} item xs={4} sm={2}>
            <img
              src={`https://image.tmdb.org/t/p/w300${member.personImage}`}
              className="img-fluid cast animated fadeIn fast"
              alt={member.personName}
            />
            <Typography variant="caption">
              {member.personName}
            </Typography>
            <div className="character">
              {member.character}
            </div>
          </Grid>
        ))}
        <Grid key={director.directorImage} item xs={4} sm={2}>
        {director.directorImage && <img
            src={`https://image.tmdb.org/t/p/w200${director.directorImage}`}
            className="img-fluid cast"
            alt={director.directorName}
        /> }
          <Typography variant="caption">
            {director.directorName}
          </Typography>
          <div className="character">
              Director
            </div>
        </Grid>
      </Grid>
    );
  }

export default Cast;
