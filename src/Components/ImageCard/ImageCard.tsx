import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import Tooltip from "@mui/material/Tooltip";
import { CurrentImage } from "../../Interfaces/Interface";

interface Props {
  currentImage: CurrentImage;
}

const ImageCard: React.FC<Props> = ({ currentImage }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div>
      {currentImage.media_type === "image" && (
        <Card sx={{ width: 400, height: 400 }}>
          <CardMedia
            component="img"
            height="220"
            image={currentImage.url}
            alt={currentImage.title}
          />
          <CardContent sx={{ height: 90 }}>
            <Typography gutterBottom variant="h5" component="div">
              {currentImage.title}
            </Typography>
            <Typography gutterBottom variant="caption" component="div">
              {currentImage.date}
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
          {currentImage.explanation}
        </Typography> */}
          </CardContent>
          <CardActions>
            <IconButton color="inherit" onClick={handleLikeClick}>
              {!isLiked ? (
                <FavoriteBorderIcon />
              ) : (
                <FavoriteIcon style={{ color: "red" }} />
              )}
            </IconButton>
            <Tooltip
              title={<Typography fontSize={17}>Copy To Clipboard</Typography>}
            >
              <IconButton
                color="inherit"
                onClick={() => {
                  navigator.clipboard.writeText(currentImage.url);
                }}
              >
                <ShareIcon />
              </IconButton>
            </Tooltip>
          </CardActions>
        </Card>
      )}
    </div>
  );
};

export default ImageCard;
