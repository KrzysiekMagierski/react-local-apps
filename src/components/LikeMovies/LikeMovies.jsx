import React, { Component } from 'react';
import './LikeMovies.css';
import movies from './data';
import Table from './Table';
import Select from './Select';

class LikeMovies extends Component {

  state = { 
    movies: movies, 
    shownMovies: movies,
    favorites: false // filter only favorites movies flag
  };

  handleSelectChange = (e) => {

    const isFavorite =  e.target.value === "favorite" ? true : false;
    const newMovies = isFavorite ? this.state.movies.filter((movie) => {
        return movie.favorite;
    }) : this.state.movies;

    this.setState({
      shownMovies: newMovies,
      favorites: e.target.value === "favorite" ? true : false
    });

    
  }

  render() {
  return (<section className="section LikeMovies project">
    <div className="container">
      <h1 className="title">Like Movies React App</h1>
      <div className="field">
        <Select onSelectChange={this.handleSelectChange} favorites={this.state.favorites} />
      </div>
      <div className="favorite-count"><i className="fas fa-lg fa-star"/> You like: 3 from 5 movies</div>
      <div className="table">
         <Table shownMovies={this.state.shownMovies}/>
      </div>
      </div>
    </section>)
  }
}

export default LikeMovies;