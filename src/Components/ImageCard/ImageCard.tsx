import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { CurrentImage } from "../../Interfaces/Interface";

interface Props {
  currentImage: CurrentImage;
}

const ImageCard: React.FC<Props> = ({ currentImage }) => {
  return (
    <Card sx={{ width: 345, height: 350 }}>
      <CardMedia
        component="img"
        height="180"
        image={currentImage.url}
        alt={currentImage.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {currentImage.title}{" "}
        </Typography>
        <Typography gutterBottom variant="caption" component="div">
          {currentImage.date}{" "}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          {currentImage.explanation}
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button size="small">Like</Button>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
  );
};

export default ImageCard;
