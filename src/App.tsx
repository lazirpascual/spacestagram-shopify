import { useEffect, useState } from "react";
import { fetchImagesData } from "./Api";
import ImageSection from "./Components/ImageSection/ImageSection";
import Header from "./Components/Header/Header";
import Notification from "./Components/Notification/Notification";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { CurrentImage } from "./Interfaces/Interface";
import "./App.css";

function App() {
  const [imagesList, setImagesList] = useState<CurrentImage[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [isFetchingButton, setIsFetchingButton] = useState<boolean>(false);
  const [openNotification, setOpenNotification] = useState<boolean>(false);
  const [notificationMessage, setNotificationMessage] = useState<string>("");

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
        if (error.response.status === 400) {
          DisplayError("Error 400: Bad Request. Unable to fetch from the API.");
        } else if (error.response.status === 500) {
          DisplayError("Error 500: Internal Server Error.");
        }
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
      if (error.response.status === 400) {
        DisplayError("Error 400: Bad Request. Unable to fetch from the API.");
      } else if (error.response.status === 500) {
        DisplayError("Error 500: Internal Server Error.");
      }
    }
  };

  const DisplayError = (errorMsg: string) => {
    setNotificationMessage(errorMsg);
    setOpenNotification(true);
  };

  return (
    <div className="App">
      <Notification
        message={notificationMessage}
        open={openNotification}
        setOpen={setOpenNotification}
        type="error"
      />
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
