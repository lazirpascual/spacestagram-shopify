import React from "react";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <div>
      <div className="logo-container">
        <img
          src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png"
          height="50px"
          width="100px"
          alt="Nasa Logo"
        />
        <Typography
          variant="h3"
          gutterBottom
          sx={{ marginTop: 3, marginRight: 5 }}
        >
          Spacestagram
        </Typography>
      </div>
      <Typography variant="subtitle1" gutterBottom>
        Brought to you by NASA’s Astronomy Picture of the Day (APOD) API.
      </Typography>
      <Divider sx={{ marginBottom: 6 }} />
    </div>
  );
};

export default Header;
