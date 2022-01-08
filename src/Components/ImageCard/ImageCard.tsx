import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import Tooltip from "@mui/material/Tooltip";
import { CurrentImage } from "../../Interfaces/Interface";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props: any) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface Props {
  currentImage: CurrentImage;
}

const ImageCard: React.FC<Props> = ({ currentImage }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [tooltipText, setTooltipText] = useState<string>("Copy To Clipboard");
  const [expanded, setExpanded] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const handleShareClick = () => {
    setTooltipText("Copied!");
    navigator.clipboard.writeText(currentImage.hdurl);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      {currentImage.media_type === "image" && (
        <Card sx={{ width: 400 }}>
          <CardHeader
            title={currentImage.title}
            subheader={currentImage.date}
            sx={{ height: 80 }}
          />
          <CardMedia
            component="img"
            height="300"
            image={currentImage.url}
            alt={currentImage.title}
            sx={{ marginBottom: 2 }}
          />
          <CardActions>
            <IconButton color="inherit" onClick={handleLikeClick}>
              {!isLiked ? (
                <FavoriteBorderIcon />
              ) : (
                <FavoriteIcon style={{ color: "red" }} />
              )}
            </IconButton>
            <Tooltip
              title={<Typography fontSize={17}>{tooltipText}</Typography>}
              leaveDelay={300}
            >
              <IconButton color="inherit" onClick={handleShareClick}>
                <ShareIcon />
              </IconButton>
            </Tooltip>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {currentImage.explanation}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      )}
    </div>
  );
};

export default ImageCard;
