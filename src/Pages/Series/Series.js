import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";

const Series = () => {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);

  const getMovie = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    setMovieList(data.results);
  };
  useEffect(() => {
    getMovie();
  }, [page]);

  return (
    <>
      <h1>Series</h1>
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
      <CustomPagination setPage={setPage} />
    </>
  );
};

export default Series;
