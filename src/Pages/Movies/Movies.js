import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleContent from "../../components/SingleContent/SingleContent";

const Movies = () => {
  const [movieList, setMovieList] = useState([]);
  const [genre, setGenre] = useState([]);
  const getData = async () => {
    const { genre } = await axios.get(
      `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.REACT_APP_API_KEY}`
    );
    setGenre(genre);
    console.log(genre);
  };
  const getMovie = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`
    );
    setMovieList(data.results);
  };
  useEffect(() => {
    getMovie();
    getData();
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

export default Movies;
