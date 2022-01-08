import { Typography } from "@mui/material";
import React from "react";
import "./App.css";
import ImageSection from "./Components/ImageSection/ImageSection";

function App() {
  return (
    <div className="App">
      <Typography variant="h3">Spacestagram</Typography>
      <ImageSection />
    </div>
  );
}

export default App;
