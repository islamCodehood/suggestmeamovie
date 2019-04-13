import React from "react";
import Favorite from "@material-ui/icons/Favorite";
import tmdb from "./tmdb.png"
const AppFooter = () => {
    return (
        <footer>
           <div className="card-footer text-footer px-md-5">
           <div className="row justify-content-between no-gutters">
            <div className="col-8">
                <p className="my-0">App #1 of 15</p>
                <p className="my-0">Made with <Favorite fontSize="inherit" color="secondary" /> by <a href="https://www.linkedin.com/in/islam-sayed-ibrahim/">Islam Sayed</a> </p>
            </div>
                
                <div className="col-4 align-right"><img src={tmdb} className="img-fluid float-right" alt="the movie database" /></div>
                
           </div>
           </div>
        </footer>
    )
}  

export default AppFooter