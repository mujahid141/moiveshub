import { Pagination, ThemeProvider, createMuiTheme } from "@mui/material";
import React from "react";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

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
      <ThemeProvider theme={darkTheme}>
        <Pagination
          count={numOfPages}
          onChange={(e) => {
            handleChange(e.target.textContent);
          }}
        />
      </ThemeProvider>
    </div>
  );
};

export default CustomPagination;
