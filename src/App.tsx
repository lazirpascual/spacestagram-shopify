import React, { useEffect, useState } from "react";
import { fetchImagesData } from "./Api";
import "./App.css";
import ImageSection from "./Components/ImageSection/ImageSection";
import Header from "./Components/Header/Header";
import Button from "@mui/material/Button";
import { CurrentImage } from "./Interfaces/Interface";

function App() {
  const [imagesList, setImagesList] = useState<CurrentImage[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const imagesData = await fetchImagesData(9);
      setImagesList(imagesData);
    };

    fetchData();
  }, []);

  const handleLoadClick = async () => {
    const imagesData = await fetchImagesData(6);
    setImagesList([...imagesList, ...imagesData]);
  };

  return (
    <div className="App">
      <Header />
      <ImageSection imagesList={imagesList} />
      <Button
        onClick={handleLoadClick}
        variant="outlined"
        sx={{ marginTop: 7, marginBottom: 9 }}
      >
        Load More
      </Button>
    </div>
  );
}

export default App;
