import React from "react";
import { Typography } from "@mui/material";

function TripInfoItem(props) {
  return (
    <div>
      <Typography variant="body1">
        <strong>{props.infoName}</strong>: {props.info}
      </Typography>
    </div>
  );
}

export default TripInfoItem;
