import React from "react";
import "../App.css";
import Button from "@material-ui/core/Button";
import ArrowBack from "@material-ui/icons/ArrowBack";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { Link } from "react-router-dom";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  }
});
const NoFavs = props => {
  const handleClick = () => props.refreshPage();
  const { classes } = props;
  return (
    <div className="d-flex flex-column justify-content-center align-items-center fav-wrapper">
      <p className="h4">You don't have any favourites yet!</p>
      <Link to="/">
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={handleClick}
        >
          <ArrowBack className={classNames(classes.leftIcon)} />
          Back
        </Button>
      </Link>
    </div>
  );
};

export default withStyles(styles)(NoFavs);
