import React, { Component } from "react";
import Chip from "@material-ui/core/Chip";
import StarRate from "@material-ui/icons/StarRate";
import Icon from "@material-ui/core/Icon";
import Favorite from "@material-ui/icons/Favorite";
import "../Animate.css";

class MovieTitle extends Component {
  handleClick = () => this.props.toggleLike();
    render() {
      const { rating, movieTitle, releaseYear } = this.props;
      
    return (
      <div>

      <h2 className="h4 animated fadeIn">
        {movieTitle}
        {"  "}
        <span className="h5">({releaseYear})</span>
        {"  "}
        <Chip
          style={{ background: "#000", color: "#fff" }}
          icon={
            <Icon fontSize="small" style={{ color: "gold" }}>
              <StarRate className="animated fadeIn slow" />
            </Icon>
          }
          label={rating}
        />
        {"  "}
        <Chip
          icon={<Favorite color="secondary" />  }
          label="Add to favourites"
          clickable
          color="secondary"
          onClick={this.handleClick}
        />
      </h2>
      </div>
    );
    }
}

export default MovieTitle;
