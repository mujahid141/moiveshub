import { Chip } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Search = () => {
  const [genre, setGenre] = useState([]);
  const fectdata = async () => {
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
        setGenre(response.data.genres);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  //console.log(genre);
  useEffect(() => {
    fectdata();
  });
  return (
    <>
      {genre.map((gen) => (
        <Chip
          style={{ background: "#ff3f5f", padding: "2px", margin: "4px" }}
          label={gen.name}
        />
      ))}
    </>
  );
};

export default Search;
