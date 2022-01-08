import React, { useState, useEffect } from "react";
import { fetchImagesData } from "../../Api";
import { CurrentImage } from "../../Interfaces/Interface";
import ImageCard from "../ImageCard/ImageCard";
import Grid from "@mui/material/Grid";

const ImageSection: React.FC = () => {
  const [imagesData, setImagesData] = useState<CurrentImage[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchImagesData(6);
      setImagesData(data);
    };

    fetchData();
  }, []);

  return (
    <Grid
      container
      spacing={3}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      {imagesData.map((currentImage, index) => (
        <Grid item>
          <ImageCard currentImage={currentImage} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ImageSection;
