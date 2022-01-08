import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import { CurrentImage } from "../../Interfaces/Interface";

interface Props {
  currentImage: CurrentImage;
}

const ImageCard: React.FC<Props> = ({ currentImage }) => {
  return (
    <div>
      {currentImage.media_type === "image" && (
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
            <IconButton color="inherit">
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton color="inherit">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      )}
    </div>
  );
};

export default ImageCard;
