import { Pagination } from "@mui/material";
import React from "react";

export const CustomPagination = ({ setPage, numOfPages = 10 }) => {
  const handleChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "10px",
      }}
    >
      <Pagination
        style={{
          fontWeight: "bolder",
        }}
        count={numOfPages}
        onChange={(e) => {
          handleChange(e.target.textContent);
        }}
      />
    </div>
  );
};

export default CustomPagination;
