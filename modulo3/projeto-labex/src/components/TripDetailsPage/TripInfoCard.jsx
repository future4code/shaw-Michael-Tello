import { CardContent, Typography, Card } from "@mui/material";
import React from "react";
import TripInfoItem from "./TripInfoItem";

function TripInfoCard() {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Informações da viagem
          </Typography>

          <TripInfoItem infoName={"Nome"} info={"Viagem para marte"} />
          <TripInfoItem infoName={"Planeta"} info={"Marte"} />
          <TripInfoItem infoName={"Data"} info={"01/07/2020"} />
          <TripInfoItem infoName={"Descricao"} info={"Viagem maneira pra colonizar marte"} />
          <TripInfoItem infoName={"Duração em dias"} info={228} />
        </CardContent>
      </Card>
    </div>
  );
}

export default TripInfoCard;
