import React, { Component } from "react";
import Chip from "@material-ui/core/Chip";

class Genres extends Component {
    render() {
        const { genres } = this.props
        return (
            <div className="my-3">
                {genres.map(genre => (
                  <Chip
                    key={genre.id}
                    label={<span className="small">{genre.name}</span>}
                    color="secondary"
                    className="mr-1"
                  />
                ))}
              </div>
        )
    }
}

export default Genres