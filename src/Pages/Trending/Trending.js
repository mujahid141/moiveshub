import React, { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import "./Tremding.css";
import axios from "axios";
const Trending = () => {
  const [movieList, setMovieList] = useState([]);
  const getMovie = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
    );
    setMovieList(data.results);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      <h1>Trending</h1>
      <div className="trending">
        {movieList.map((movie) => (
          <SingleContent
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.title || movie.name}
            date={movie.first_air_date || movie.release_date}
            media_type={movie.media_type}
            vote_average={movie.vote_average}
          />
        ))}
      </div>
    </>
  );
};

export default Trending;

// <img
// style={{ width: "300px" }}
// src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
// alt="movies"
