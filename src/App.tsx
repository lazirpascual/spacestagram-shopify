import React, { useEffect, useState } from "react";
import { fetchImagesData } from "./Api";
import ImageSection from "./Components/ImageSection/ImageSection";
import Header from "./Components/Header/Header";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { CurrentImage } from "./Interfaces/Interface";
import "./App.css";

function App() {
  const [imagesList, setImagesList] = useState<CurrentImage[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [isFetchingButton, setIsFetchingButton] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const imagesData = await fetchImagesData(8);
      if (imagesData) {
        setIsFetching(false);
      }
      setImagesList(imagesData);
    };

    fetchData();
  }, []);

  const handleLoadClick = async () => {
    setIsFetchingButton(true);
    const imagesData = await fetchImagesData(6);
    if (imagesData) {
      setIsFetchingButton(false);
    }
    setImagesList([...imagesList, ...imagesData]);
  };

  return (
    <div className="App">
      <Header />
      {isFetching ? (
        <div>
          <CircularProgress /> <br />
        </div>
      ) : (
        <ImageSection imagesList={imagesList} />
      )}
      {isFetchingButton ? (
        <div>
          <CircularProgress sx={{ marginTop: 7, marginBottom: 9 }} /> <br />
        </div>
      ) : (
        <Button
          onClick={handleLoadClick}
          variant="outlined"
          sx={{ marginTop: 7, marginBottom: 9 }}
        >
          Load More
        </Button>
      )}
    </div>
  );
}

export default App;
