import React, { Component } from "react";
import Chip from "@material-ui/core/Chip";
import StarRate from "@material-ui/icons/StarRate";
import Icon from "@material-ui/core/Icon";

class MovieTitle extends Component {
    render() {
        const { rating, movieTitle } = this.props
        return (
            <h2 className="h4">
                {movieTitle}
                {"  "}
                <Chip
                  style={{ background: "#000", color: "#fff" }}
                  icon={
                    <Icon fontSize="small" style={{ color: "gold" }}>
                      <StarRate />
                    </Icon>
                  }
                  label={rating}
                />
              </h2>
        )
    }
}

export default MovieTitle
