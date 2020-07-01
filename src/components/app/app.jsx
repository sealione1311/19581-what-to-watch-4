import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from "../main/main.jsx";
import MovieCard from '../movie-card/movie-card.jsx';

const onTitleClick = () => {};

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovie: null
    };
    this._smallCardClickHandler = this._smallCardClickHandler.bind(this);
  }

  _renderApp() {
    const {selectedMovie} = this.state;

    if (selectedMovie) {
      return this._renderMovieCard();
    } else {
      return this._renderMain();
    }
  }

  _renderMain() {
    return (
      <Main
        movie={this.props.movie}
        films = {this.props.films}
        onTitleClick = {onTitleClick}
        onSmallCardClick={this._smallCardClickHandler}
      />
    );
  }

  _renderMovieCard() {
    const currentCard = this.state.selectedMovie;
    return (
      <MovieCard
        movie = {currentCard}
      />
    );
  }

  _smallCardClickHandler(movie) {
    this.setState({
      selectedMovie: movie
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/card">
            {this._renderMovieCard()}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  films: PropTypes.array.isRequired,
  movie: PropTypes.shape({
    bg: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    ratingCount: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.array.isRequired,
  })
};

export default App;
