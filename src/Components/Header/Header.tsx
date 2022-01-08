import React from "react";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

const Header: React.FC = () => {
  return (
    <div>
      <Typography variant="h3" gutterBottom sx={{ marginTop: 3 }}>
        Spacestagram
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Brought to you by NASA’s APOD image API.
      </Typography>
      <Divider sx={{ marginBottom: 6 }} />
    </div>
  );
};

export default Header;
