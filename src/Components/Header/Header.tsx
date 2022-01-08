import React from "react";
import { Typography } from "@mui/material";

const Header: React.FC = () => {
  return (
    <div>
      <Typography variant="h3" gutterBottom>
        Spacestagram
      </Typography>
      <Typography variant="subtitle1" gutterBottom sx={{ marginBottom: 5 }}>
        Brought to you by NASA’s APOD image API.
      </Typography>
    </div>
  );
};

export default Header;
