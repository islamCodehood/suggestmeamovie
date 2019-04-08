import React, { Component } from "react";
import "../App.css";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    img: {
      height: "100%",
      maxWidth: "100%"
    }
  });

class Poster extends Component {
    render() {
        const { poster } = this.props
        return (
            <>
                <img
                  src={poster}
                  className="img-fluid mt-xs-2 mt-sm-4 mt-lg-5 poster"
                  alt=""
                />
            </>
        )
    }
}

export default withStyles(styles)(Poster);
