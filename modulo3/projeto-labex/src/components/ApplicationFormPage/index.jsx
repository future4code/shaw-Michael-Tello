import PageTitle from "../PageTitle";
import { FormContainer } from "../FormContainer";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import { headers, labexURL } from "../../constants/labexAPI";
import useRequestData from "../../hooks/useRequestData";
import { useEffect, useState } from "react";
import axios from "axios";

function ApplicationFormPage() {
  const [trips, setTrips] = useState([]);

  // const tripsList = trips.map((trip) => {
  //   return (
  //     <MenuItem key={trip.id} value={trip}>
  //       {trip.name}
  //     </MenuItem>
  //   );
  // });

  const getTrip = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/michaelsoto/trips",
        headers
      )
      .then((response) => {
        setTrips(response.data.trips);
        console.log(response);
      })
      .catch((error) => {
        alert("Erro no Get");
      });
  };

  return (
    <div>
      <button onClick={getTrip}>Clicar</button>
      {/* <PageTitle title={"Aplicar para viagem"} />
      <FormContainer>
        <TextField label="Nome do candidato" />
        <TextField label="Idade" type="number" />
        <TextField
          label="Texto de aplicação"
          helperText="Explique porque devemos te aprovar?"
        />
        <TextField label="Profissão" />
        <FormControl>
          <InputLabel id="select-paises">Paises</InputLabel>
          <Select labelId="select-paises">
            <MenuItem value="brasil">Brasil</MenuItem>
            <MenuItem value="argentina">Argentina</MenuItem>
            <MenuItem value="eua">Estados Unidos</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="select-viagens">Viagens</InputLabel>
           <Select labelId="select-viagens">{tripsList}</Select> 
        </FormControl>
        <Button variant="contained" type="submit">
          Increver-se
        </Button>
      </FormContainer> 
    */}
    </div>
  );
}

export default ApplicationFormPage;
