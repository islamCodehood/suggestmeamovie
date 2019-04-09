import React, { Component } from "react";
import Favorite from "@material-ui/icons/Favorite";

class AppFooter extends Component {
    render() {
        
        return (
            <footer>
               <div className="card-footer text-footer">
                    <p className="my-0">App #1 of 15</p>
                    <p className="my-0">Made with <Favorite fontSize="inherit" color="secondary" /> by Islam Sayed </p>
               </div>
            </footer>
        )
    }
}

export default AppFooter