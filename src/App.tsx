import { useEffect, useState } from "react";
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

  // fetch 8 images upon loading application
  useEffect(() => {
    const fetchData = async () => {
      try {
        const imagesData = await fetchImagesData(8);
        if (imagesData) {
          setIsFetching(false);
        }
        setImagesList(imagesData);
      } catch (error: any) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  // fetch 6 more images and add it to current images list
  const handleLoadClick = async () => {
    try {
      setIsFetchingButton(true);
      const imagesData = await fetchImagesData(6);
      if (imagesData) {
        setIsFetchingButton(false);
      }
      setImagesList([...imagesList, ...imagesData]);
    } catch (error: any) {
      console.log(error.message);
    }
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
          size="large"
        >
          Load More
        </Button>
      )}
    </div>
  );
}

export default App;
