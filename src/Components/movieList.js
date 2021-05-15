import React, { Component } from "react";
import { connect } from "react-redux";
import { retrieveMovie } from "../Actions/movies";
import { Link } from "react-router-dom";
import '../pagination.css';
import Image from '../images/interstellar.jpg'
import Slider from './slider';

class MovieList extends Component {

  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);

    this.state = {
      searchName: ""
    };
  }

  componentDidMount() {
    this.props.retrieveMovie();
  }

  onSearch = (e) => {
    const search = e.target.value;
    this.setState({
      searchName: search,
    });
  }

  render() {
    const { searchName } = this.state;
    const { movies } = this.props;
    console.log('movies', movies);

    const filteredMovies = movies.filter(movie => {
      return movie.name.toLowerCase().includes(searchName.toLowerCase()) ||
        movie.description.toLowerCase().includes(searchName.toLowerCase()) ||
        movie.genre.toLowerCase().includes(searchName.toLowerCase())
    })


    return (
      <div>
        <div class="row">
          <div class="col-md-12">
            <header>
              <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark" style={{ justifyContent: "space-between" }}>
                <img src="https://m.media-amazon.com/images/G/01/IMDb/BG_icon_iOS._SY230_SX307_AL_.png" style={{ maxHeight: "40px" }} alt="Logo"></img>
                <a class="navbar-brand" href="#">Welcome to IMDB!!!!</a>
                <input class="form-control col-sm-2" value={searchName} type="text" placeholder="Search movie..." aria-label="Search" onChange={this.onSearch} />
              </nav>
            </header>
          </div>
        </div>

        <Slider />

        <ul style={{ padding: "0px" }}>
          <div className="row">
            {filteredMovies &&
              filteredMovies.map((movies) => (
                console.log('movies5',movies.imageUrl.split(', ')[0]),
                <div className="col-md-4">
                  <div className="card" style={{ marginBottom: "20px", border: "solid 2px black", backgroundColor: "gainsboro", borderRadius: "5px" }}>
                    <img className="card-img-top" src={movies.imageUrl} alt="Card image cap" style={{maxHeight:"200px"}} />
                    <div className="card-body" style={{fontStyle:"oblique", fontWeight:"500"}}>
                      <p className="card-title">Movie: {movies.name}</p>
                      <p className="card-text">Directed By: {movies.director}</p>
                      <p className="card-text">Cast: {movies.cast}</p>
                      <p className="card-text">Rating: {movies.rating}</p>
                      <p className="card-text">Genre: {movies.genre}</p>
                      <div>
                        <div><a href={"/viewMovieDetail/" + movies.id} className="btn btn-primary">Details</a> </div>
                      </div>
                    </div>
                  </div>
                </div>

              ))}
          </div>
        </ul>
        <div className="row">
          <div className="col-md-12">
            <footer class="navbar navbar-expand-md navbar-dark bg-dark ">
              <p style={{color:"white", alignSelf:"center"}}> Vivek Joshi, 2017-2018 Company, Inc.</p>
            </footer>
          </div>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

export default connect(mapStateToProps, { retrieveMovie })(MovieList);