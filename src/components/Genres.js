import React from "react";
import Chip from "@material-ui/core/Chip";
import "../Animate.css";

const Genres = (props) => {
        const { genres } = props
        return (
            <div className="my-3">
                {genres.map(genre => (
                  <Chip
                    key={genre.id}
                    label={<span className="small">{genre.name}</span>}
                    color="secondary"
                    className="mr-1 animated fadeIn"
                  />
                ))}
              </div>
        )
}

export default Genres