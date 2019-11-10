import React from "react";
import { Card, CardActionArea, CardContent, Chip, Typography } from "@material-ui/core";
import "./List.css";

const List = ({ title, items }) => {
  return (
    <Card className="content-card">
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h6">
            {title}
          </Typography>
          {items.map((item, key) => (
            <Chip
              key={key}
              label={item.name}
              variant="outlined"
              className="chips"
            />
          ))}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default List;
