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
            <div className="character realName">
              {member.personName}
            </div>
            <div className="character">
              {member.character}
            </div>
          </Grid>
        ))}
        
        {
          director.directorName ? <Grid key={director.directorImage} item xs={4} sm={2}> <img src={`https://image.tmdb.org/t/p/w200${director.directorImage}`} className="img-fluid cast" alt={director.directorName} /> <Typography variant="caption">
          {director.directorName}
        </Typography>
        <div className="character">
            Director
          </div> </Grid>: null
        }         
      </Grid>
    );
  }

export default Cast;
