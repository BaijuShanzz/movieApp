import './Hero.css';
// importing react hooks
import React, { useState, useEffect } from "react";

// import axios used to fetch api
import axios from "axios";

// importing search icon
import SearchIcon from "../../assets/images/svg/SearchIcon.svg";

import MovieCard from "../MovieCard/MovieCard";
const Hero = () => {

  // creating a state to store movies data;
  const [movies, setMovies] = useState([]);

  

  // fetching movie data using axios 
  const fetchMovies = async (title) => {
    // set the api 
    const apiUrl = "http://www.omdbapi.com?apikey=b6003d8a";
    try {
      const response = await axios.get(`${apiUrl}&s=${title}`);
      setMovies(response.data.Search);
    } catch (err) {
      console.log(err);
    };
  };

  // load content from after render 
  useEffect(() => {
    fetchMovies();
  },[]);

 
  return (
    <div className="app">
      <h1>MovieW</h1>

      <div className="search">
        <input value="" onChange="" placeholder="Search for movies" />
        <img src={SearchIcon} alt="search" onClick="" />
      </div>
    
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}

    </div>
  );
};

export default Hero;
