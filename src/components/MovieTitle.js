import React from "react";
import Chip from "@material-ui/core/Chip";
import StarRate from "@material-ui/icons/StarRate";
import Icon from "@material-ui/core/Icon";
import "../Animate.css";

const MovieTitle = props => {
  const { rating, movieTitle } = props;
  return (
    <h2 className="h4 animated fadeIn">
      {movieTitle}
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
    </h2>
  );
};

export default MovieTitle;
