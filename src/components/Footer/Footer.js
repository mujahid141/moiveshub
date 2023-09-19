import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SearchIcon from "@mui/icons-material/Search";
import "./Footer.css";
import { Padding } from "@mui/icons-material";
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <div className="footer">
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} />
          <BottomNavigationAction label="Movies" icon={<MovieCreationIcon />} />
          <BottomNavigationAction label="Tv Series" icon={<LiveTvIcon />} />
          <BottomNavigationAction label="Search" icon={<SearchIcon />} />
        </BottomNavigation>
      </div>
    </Box>
  );
}
