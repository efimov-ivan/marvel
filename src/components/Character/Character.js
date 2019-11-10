import React from "react";
import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@material-ui/core";

const Character = ({ name, description, image, imageSize }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={name}
          height={imageSize}
          image={`${image.path}.${image.extension}`}
          title={name}
        ></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Character;
