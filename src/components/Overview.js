import React from "react";

const Overview = (props) => {
        const { overview } = props
        return (
            <p className="mt-md-3 small">{overview}</p>
        )
}

export default Overview