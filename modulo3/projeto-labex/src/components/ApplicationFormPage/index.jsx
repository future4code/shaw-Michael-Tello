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
import { labexURL } from "../../constants/labexAPI";
import axios from "axios";
import { useForm } from "../../hooks/useForm";
import { useTripsList } from "../../hooks/useTripsList";


function ApplicationFormPage() {
  const trips = useTripsList();
  const { form, onChange, cleanFields } = useForm({
    name: "",
    age: 0,
    applicationText: "",
    profession: "",
    country: "",
    trip: "",
  });

  // ANCHOR EVENTO FORM
  const onSubmitApplication = (event) => {
    event.preventDefault();

    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country,
    };

    // ANCHOR  POST APPLY TO TRIP
    axios.post(`${labexURL}/trips/{form.trip.id}/apply`, body);
    // .then((response) => {
    //   alert("Requisição enviada");
    // })
    // .catch((error) => {
    //   alert("Erro no POST");
    // });

    cleanFields();
  };

  // ANCHOR MAP
  const tripsList = trips.map((trip) => {
    return (
      <MenuItem key={trip.id} value={trip}>
        {trip.name}
      </MenuItem>
    );
  });

  return (
    <div>
      <PageTitle title={"Aplicar para viagem"} />
      <FormContainer onSubmit={onSubmitApplication}>
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
          <Select onChange={onChange} value={form.country} name={"country"}>
            <MenuItem value="brasil">Brasil</MenuItem>
            <MenuItem value="argentina">Argentina</MenuItem>
            <MenuItem value="eua">Estados Unidos</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="select-viagens">Viagens</InputLabel>
          <Select onChange={onChange} value={form.trip} name={"trip"}>
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
