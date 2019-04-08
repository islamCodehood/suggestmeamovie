import React, { Component } from "react";

class Overview extends Component {
    render() {
        const { overview } = this.props
        return (
            <p className="mt-md-3">{overview}</p>
        )
    }
}

export default Overview