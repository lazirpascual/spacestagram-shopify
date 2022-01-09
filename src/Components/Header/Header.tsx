import React from "react";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png"
          height="40px"
          width="80px"
          alt="Nasa Logo"
        />
        <Typography
          variant="h3"
          sx={{ marginTop: 2, marginRight: 4, marginBottom: 2 }}
        >
          Spacestagram
        </Typography>
      </div>
      <Typography variant="subtitle1" sx={{ marginBottom: 3 }}>
        Brought to you by NASA’s Astronomy Picture of the Day (APOD) API
      </Typography>
      <Divider />
    </div>
  );
};

export default Header;
