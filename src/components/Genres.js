import { Chip } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";

export const Genres = ({
  type,
  genres,
  selectedGenre,
  setSelectedGenre,
  setPage,
  setGenres,
}) => {
  const handleAdd = (genres) => {
    setGenres((prevGenres) => prevGenres.filter((g) => g.id !== genres.id));
    setSelectedGenre((prevSelected) => [...prevSelected, genres]);
    setPage(1);
  };

  const handleremove = (genres) => {
    setGenres((prevGenres) => [...prevGenres, genres]);
    setSelectedGenre((prevSelected) =>
      prevSelected.filter((selected) => selected.id !== genres.id)
    );
    setPage(1);
  };
  const fetchGenre = async () => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/genre/movie/list",
      params: { language: "en" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Nzc2NGQwZTgwYzY2Y2ZlNDE1MDE0ZTIwY2Y3MzRiMyIsInN1YiI6IjY1MDE1MGFjZWZlYTdhMDBmZDFiZDcwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s4haC-dUyhtkrZmn8A2FqcvGvoSvak2EBxetRd8FAOw",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setGenres(response.data.genres);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    fetchGenre();

    return () => {
      setGenres([]);
    };
  }, []);
  return (
    <>
      {selectedGenre.map((gen) => (
        <Chip
          style={{ color: "primary", padding: "2px", margin: "4px" }}
          label={gen.name}
          key={gen.id}
          clickable
          onDelete={() => handleremove(gen)}
        />
      ))}
      {genres.map((gen) => (
        <Chip
          style={{ background: "#ff3f5f", padding: "2px", margin: "4px" }}
          label={gen.name}
          key={gen.id}
          clickable
          onClick={() => handleAdd(gen)}
        />
      ))}
    </>
  );
};
