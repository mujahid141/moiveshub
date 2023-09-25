import React from "react";
import { img_300, uavailable } from "../../data";
import "./SingleCotent.css";
const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <div className="media">
      <img src={poster ? `${img_300}/${poster}` : uavailable} alt="poster" />
      <span className="title">{title}</span>
      <span className="subTitle">
        <span className="M_t">
          {media_type === "tv" ? "TV Sereis" : "Movie"}
        </span>
        <span className="date">{date}</span>
      </span>
    </div>
  );
};

export default SingleContent;
