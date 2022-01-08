import React, { useEffect, useState } from "react";
import { fetchImagesData } from "./Api";
import "./App.css";
import ImageSection from "./Components/ImageSection/ImageSection";
import Header from "./Components/Header/Header";
import Button from "@mui/material/Button";
import { CurrentImage } from "./Interfaces/Interface";

function App() {
  const [imagesList, setImagesData] = useState<CurrentImage[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchImagesData(6);
      setImagesData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <ImageSection imagesList={imagesList} />
      <Button variant="outlined" sx={{ marginTop: 7 }}>
        Load More
      </Button>
    </div>
  );
}

export default App;
