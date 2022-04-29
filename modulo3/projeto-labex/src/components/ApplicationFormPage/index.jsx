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
import React from "react";
// import { headers, labexURL } from "../../constants/labexAPI";
// import useRequestData from "../../hooks/useRequestData";
import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "../../hooks/useForm";

function ApplicationFormPage() {
  const [trips, setTrips] = useState([]);
  const { form, onChange, cleanFields } = useForm({
    name: "",
    age: 0,
    applicationText: "",
    profession: "",
    country: "",
  });

  const register = (event) => {
    event.preventDefault();
    console.log("Formulário enviado!", form);
    cleanFields();
  };

 
  const getTrip = async () => {
    await axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/michaelsoto/trips"
      )

      .then((response) => {
        console.log(response.data);
        setTrips(response.data.trips);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    getTrip();
  }, []);

  const tripsList = trips.map((trip) => {
    console.log(trip);
    return (
      <MenuItem key={trip.id} value={trip}>
        {trip.name}
      </MenuItem>
    );
  });

  return (
    <div>
      <PageTitle title={"Aplicar para viagem"} />
      <FormContainer onSubmit={register}>
        <TextField
          label={"Nome do candidato"}
          onChange={onChange}
          value={form.name}
          name={"name"}
        />
        <TextField
          label={"Idade"}
          type={"number"}
          onChange={onChange}
          value={form.age}
          name={"age"}
        />
        <TextField
          label={"Texto de aplicação"}
          helperText="Explique porque devemos te aprovar?"
          onChange={onChange}
          value={form.applicationText}
          name={"applicationText"}
        />
        <TextField
          label={"Profissão"}
          onChange={onChange}
          value={form.profession}
          name={"profession"}
        />
        <FormControl>
          <InputLabel id="select-paises">Paises</InputLabel>
          <Select
            labelId="select-paises"
            onChange={onChange}
            value={form.country}
            name={"country"}
          >
            <MenuItem value="brasil">Brasil</MenuItem>
            <MenuItem value="argentina">Argentina</MenuItem>
            <MenuItem value="eua">Estados Unidos</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="select-viagens">Viagens</InputLabel>
          <Select
            labelId="select-viagens"
            onChange={onChange}
            value={form.trip}
            name={"trip"}
          >
            {tripsList}
          </Select>
        </FormControl>
        <Button variant="contained" type="submit">
          Increver-se
        </Button>
      </FormContainer>
    </div>
  );
}

export default ApplicationFormPage;
