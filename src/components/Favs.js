import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";

class Favs extends Component  {
    componentDidMount() {
        
        (setTimeout(() => {return (this.props.favedMoviesIds).map(movieId => fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=6528ff68dbc27d13fb177793f4c69f9d&language=en-US`)
                                                                            .then(response => response.json())
                                                                            .then(data => this.getPosters(data.poster_path)))}, 3000))/* .map(movieId => fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=6528ff68dbc27d13fb177793f4c69f9d&language=en-US`)
                                                .then(response => response.json())
                                                .then(data => this.getPoster(data.poster_path))) */
    }
    state = {
        posters: [],
    }
    
    getPosters = (posterPath) => {
        /* this.setState(prevState => ({
            posters: prevState.posters.concat(`https://image.tmdb.org/t/p/w200/${posterPath}`)
        })) */
        this.setState(prevState => ({
            posters: prevState.posters.concat(`https://image.tmdb.org/t/p/w200/${posterPath}`)
        }))
        console.log(`https://image.tmdb.org/t/p/w200/${posterPath}`)
    }

    render() {       
        const { posters } = this.state
        return (
            <div className="container py-5 w-100">
                <div className="row justify-content-center align-items-center no-gutters">
                
            {posters.map(poster => (
                <div key={poster} className="col-12 col-md-3 text-center">
                <img
                  src={poster}
                  className="border border-danger w-100 animated fadeIn fast"
                  alt=""
                />
                </div>
            ))}
            </div>
                </div>

        )
    }
        
}

export default Favs
