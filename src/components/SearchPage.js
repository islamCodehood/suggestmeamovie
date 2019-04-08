import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";


import "../App.css";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "100%"
  },
  menu: {
    width: 200
  }
});

const genres = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Music",
  "Mystery",
  "Romance",
  "Science Fiction",
  "TV Movie",
  "Thriller",
  "War",
  "Western"
];

const currentYear = new Date().getFullYear();
const releaseYears = new Array();

for (var x = 1988; x <= currentYear; x++) {
  releaseYears.push(x);
}

class SearchPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div style={{border: "2px solid green"}}>
        <form className={classes.container} noValidate autoComplete="off">
          <Grid container spacing={24}>
            <Grid item sm={12} md={6}>
              <TextField
                id="movie"
                label="Movie Name"
                className={classes.textField}
                //value={this.state.name}
                //onChange={this.handleChange("name")}
                margin="normal"
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <TextField
                id="actor"
                label="Actor/Actress"
                className={classes.textField}
                //value={this.state.name}
                //onChange={this.handleChange("name")}
                margin="normal"
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <TextField
                id="Genre"
                select
                label="Genre"
                className={classes.textField}
                //value={this.state.currency}
                //onChange={this.handleChange('currency')}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                helperText="Select Genre"
                margin="normal"
              >
                {genres.map(option => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item sm={12} md={6}>
              <TextField
                id="director"
                label="Director"
                className={classes.textField}
                //value={this.state.name}
                //onChange={this.handleChange("name")}
                margin="normal"
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <TextField
                id="Release Date"
                select
                label="Release Date"
                className={classes.textField}
                //value={this.state.currency}
                //onChange={this.handleChange('currency')}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                helperText="Select Genre"
                margin="normal"
              >
                {releaseYears.map(year => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(SearchPage);
