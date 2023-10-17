import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";
import useGenres from "../../components/hooks/useGenres";
import { Genres } from "../../components/Genres";

const Movies = () => {
  const [movieList, setMovieList] = useState([]);
  const [genres, setGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState();
  const [selectedGenre, setSelectedGenre] = useState([]);

  const getMovie = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=${page}&with_genres=${genreforURL}`
    );
    setMovieList(data.results);
    setNumOfPages(data.total_pages);
  };

  const genreforURL = useGenres(selectedGenre);
  useEffect(() => {
    getMovie();
  }, [page, genreforURL]);

  return (
    <>
      <h1>Movies</h1>
      <Genres
        type="movie"
        genres={genres}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        setPage={setPage}
        setGenres={setGenres}
      />
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
      <CustomPagination setPage={setPage} numOfPages={numOfPages} />
    </>
  );
};

export default Movies;
