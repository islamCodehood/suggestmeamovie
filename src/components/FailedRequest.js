import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import ArrowBack from "@material-ui/icons/ArrowBack";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { Link } from "react-router-dom";
import "../App.css";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  }
});

class FailedRequest extends Component {
  handleClick = () => this.props.refreshPage();

  render() {
    const { classes } = this.props;

    const postersPaths = [
      "/kmxWh9e7y2pvhnCZNaSzW5NpT3R.jpg",
      "/eHi3Nbgh6Cs2KiIyEMF4Ig4CdjX.jpg",
      "/9xpKbbhJct00m0XXjneOo405uqQ.jpg",
      "/e26QQxiD9glX34qU9Lfj98nMCTA.jpg",
      "/anrhVr6lZqesL1HDgmX06Oo86R.jpg",
      "/tXcWlYPgJsw9xN8wUoYfprW19sC.jpg",
      "/sAzdi8RAynDCukwHVEsSNCqhilH.jpg",
      "/rCcmr3PqKohsjl7SlsTRZF0WcUF.jpg",
      "/yHhBfL2msdFWwLpjGSgPJpVmxQN.jpg",
      "/hgWAcic93phg4DOuQ8NrsgQWiqu.jpg",
      "/ekstpH614fwDX8DUln1a2Opz0N8.jpg",
      "/siWpVZlD3pahKXNnV9M52yCMZJG.jpg",
      "/zzGtimy1mUJYDjFjCmn2dpHREGV.jpg",
      "/eNRquvMLPj5lv5cg4YRlJHRwU2b.jpg",
      "/e4j7s9SzaJTfjkorMX1iY38IzZi.jpg",
      "/4LptbrkgqQ0exBxhbzHKCkleY9u.jpg",
      "/6jLkkZO4zryBTcCwkVGliQ3h5TU.jpg",
      "/jyxZhB5qHKIQ9JJ7J8wWJEH6kcS.jpg",
      "/kmxWh9e7y2pvhnCZNaSzW5NpT3R.jpg",
      "/eHi3Nbgh6Cs2KiIyEMF4Ig4CdjX.jpg",
      "/9xpKbbhJct00m0XXjneOo405uqQ.jpg",
      "/e26QQxiD9glX34qU9Lfj98nMCTA.jpg",
      "/anrhVr6lZqesL1HDgmX06Oo86R.jpg",
      "/tXcWlYPgJsw9xN8wUoYfprW19sC.jpg",
      "/sAzdi8RAynDCukwHVEsSNCqhilH.jpg",
      "/rCcmr3PqKohsjl7SlsTRZF0WcUF.jpg",
      "/yHhBfL2msdFWwLpjGSgPJpVmxQN.jpg",
      "/hgWAcic93phg4DOuQ8NrsgQWiqu.jpg",
      "/ekstpH614fwDX8DUln1a2Opz0N8.jpg",
      "/siWpVZlD3pahKXNnV9M52yCMZJG.jpg",
      "/zzGtimy1mUJYDjFjCmn2dpHREGV.jpg",
      "/eNRquvMLPj5lv5cg4YRlJHRwU2b.jpg",
      "/e4j7s9SzaJTfjkorMX1iY38IzZi.jpg",
      "/4LptbrkgqQ0exBxhbzHKCkleY9u.jpg",
      "/6jLkkZO4zryBTcCwkVGliQ3h5TU.jpg",
      "/jyxZhB5qHKIQ9JJ7J8wWJEH6kcS.jpg",
      "/kmxWh9e7y2pvhnCZNaSzW5NpT3R.jpg",
      "/eHi3Nbgh6Cs2KiIyEMF4Ig4CdjX.jpg",
      "/9xpKbbhJct00m0XXjneOo405uqQ.jpg",
      "/e26QQxiD9glX34qU9Lfj98nMCTA.jpg",
      "/anrhVr6lZqesL1HDgmX06Oo86R.jpg",
      "/tXcWlYPgJsw9xN8wUoYfprW19sC.jpg",
      "/sAzdi8RAynDCukwHVEsSNCqhilH.jpg",
      "/rCcmr3PqKohsjl7SlsTRZF0WcUF.jpg",
      "/yHhBfL2msdFWwLpjGSgPJpVmxQN.jpg",
      "/hgWAcic93phg4DOuQ8NrsgQWiqu.jpg",
      "/ekstpH614fwDX8DUln1a2Opz0N8.jpg",
      "/siWpVZlD3pahKXNnV9M52yCMZJG.jpg",
      "/zzGtimy1mUJYDjFjCmn2dpHREGV.jpg",
      "/eNRquvMLPj5lv5cg4YRlJHRwU2b.jpg",
      "/e4j7s9SzaJTfjkorMX1iY38IzZi.jpg",
      "/4LptbrkgqQ0exBxhbzHKCkleY9u.jpg",
      "/6jLkkZO4zryBTcCwkVGliQ3h5TU.jpg",
      "/jyxZhB5qHKIQ9JJ7J8wWJEH6kcS.jpg"
    ];
    return (
      <div className="container-fluid py-3 failed-request-wrapper">
        <div className="row no-gutters justify-content-around">
          {postersPaths.map((path, index) => (
            <div className="col-2" key={path + index}>
              <img
                src={`https://image.tmdb.org/t/p/w400${path}`}
                alt=""
                className="img-fluid w-100"
              />
            </div>
          ))}
          <div className="text-center text-above">
            <p>Failed request</p>
            <Link to="/">
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                onClick={this.handleClick}
                size="large"
              >
                <ArrowBack className={classNames(classes.leftIcon)} />
                Back
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(FailedRequest);
