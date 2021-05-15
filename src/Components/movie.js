import { retrieveMovieById } from "../Actions/movies";
import { connect } from "react-redux";
import React, { Component } from "react";
import Video from './video'
import Image from './image'

class Movie extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        this.props.retrieveMovieById(this.props.match.params.id);
        console.log('props', this.props.match.params.id)
    }

    render() {

        const { movie } = this.props;
        console.log('movie', movie.imageUrl)

        return (
            <div>
                <div class="row">
                    <div class="col-md-12">
                        <header>
                            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                                <a class="navbar-brand" href="#">Welcome to Details Page!!!!</a>
                            </nav>
                        </header>
                    </div>
                </div>
                <div style={{justifyContent: "space-evenly", marginTop: "70px" }}>
                    <div className="d-flex" style={{marginBottom:"20px"}}>
                        <div className="col-md-6">
                            <Image imageUrl={movie.imageUrl} />
                        </div>
                        <div style={{ fontSize: "25px", fontStyle: "oblique" }}>
                            <p><b>Movie: {movie.name}</b></p>
                            <p><b>Directed By: {movie.director}</b></p>
                            <p><b>Cast: {movie.cast}</b></p>
                            <p><b>Date: {movie.date}</b></p>
                            <p><b>Summary: {movie.description}</b></p>
                            <p><b>Tagline: {movie.tagline}</b></p>
                            <p><b>Rating: {movie.rating}</b></p>
                            <p><b>Genre: {movie.genre}</b></p>
                            <Video videoId={movie.videoId} />
                        </div>
                    </div>
                    <div className="d-flex" style={{marginBottom:"20px", justifyContent:"center"}}>
                        <Image imageUrl={movie.imageUrl2} />
                        <Image imageUrl={movie.imageUrl3} />
                    </div>
                </div>
            </div>
        )
    }


}

const mapStateToProps = (state) => {
    return {
        movie: state.movies,
    };
};

export default connect(mapStateToProps, { retrieveMovieById })(Movie);