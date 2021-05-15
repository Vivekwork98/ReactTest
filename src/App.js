// import logo from './logo.svg';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link  } from "react-router-dom";
import MovieList from "./Components/movieList";
import Movie from "./Components/movie";

function App() {
  return (
    <div className="App" style={{backgroundColor:"gray"}}>
      <Router>
      {/* <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="navbar-nav mr-auto">
          </div>
        </nav> */}

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/movies"]} component={MovieList} />
            <Route path="/viewMovieDetail/:id" component={Movie} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
