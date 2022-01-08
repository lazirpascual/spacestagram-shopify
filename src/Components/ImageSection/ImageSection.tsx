import React, { useState, useEffect } from "react";

import { CurrentImage } from "../../Interfaces/Interface";
import ImageCard from "../ImageCard/ImageCard";
import Grid from "@mui/material/Grid";

interface Props {
  imagesList: CurrentImage[];
}

const ImageSection: React.FC<Props> = ({ imagesList }) => {
  return (
    <Grid
      container
      spacing={3}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      {imagesList.map((currentImage, index) => (
        <Grid item>
          <ImageCard currentImage={currentImage} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ImageSection;
