import * as React from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SearchIcon from "@mui/icons-material/Search";
import "./Footer.css";
import { useEffect } from "react";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    if (value === 0) navigate("/");
    else if (value === 1) navigate("/movies");
    else if (value === 2) navigate("/series");
    else if (value === 3) navigate("/search");
  }, [value, navigate]);

  return (
    <Box>
      <div className="footer">
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            style={{ width: "20px" }}
            label="Trending"
            icon={<WhatshotIcon />}
          />
          <BottomNavigationAction label="Movies" icon={<MovieCreationIcon />} />
          <BottomNavigationAction label="Tv Series" icon={<LiveTvIcon />} />
          <BottomNavigationAction label="Search" icon={<SearchIcon />} />
        </BottomNavigation>
      </div>
    </Box>
  );
}
