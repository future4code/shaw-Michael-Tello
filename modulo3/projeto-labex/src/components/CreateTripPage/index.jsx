import PageTitle from "../PageTitle";
import { Button, TextField } from "@mui/material";
import { FormContainer } from "../FormContainer";
import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import axios from "axios";
import { labexURL } from "../../constants/labexAPI";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";

function CreateTripPage() {
  const { form, onChange, cleanFields } = useForm({
    name: "",
    planet: "",
    description: "",
    duration: "",
  });

  useProtectedPage();

  const navigate = useNavigate();

  const [date, setDate] = useState(new Date());

  const onSubmitForm = (event) => {
    event.preventDefault();
    const formatteDate = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()} `;

    const body = {
      name: form.name,
      planet: form.planet,
      date: formatteDate,
      description: form.description,
      durationInDays: form.duration,
    };

    // ANCHOR POST CREATE TRIP
    axios
      .post(`${labexURL}/trips`, body, {
        headers: {
          auth: window.localStorage.getItem("token"),
        },
      })
      .then((response) => {
        navigate("/viagens");
      })
      .catch((error) => {
        alert("Erro no POST");
      });
  };

  return (
    <div>
      <PageTitle title={"Criar viagem"} />
      <FormContainer onSubmit={onSubmitForm}>
        <TextField
          onChange={onChange}
          label={"Nome"}
          name={"name"}
          value={form.name}
        />
        <TextField
          onChange={onChange}
          label={"Planeta"}
          name={"planet"}
          value={form.planet}
        />

        <TextField
          type="date"
          // label={"Data"}
          margin="normal"
          value={date}
          // onChange={(date) => setDate(date)}
        />
        <TextField
          onChange={onChange}
          label={"Descrição"}
          name={"description"}
          value={form.description}
        />
        <TextField
          onChange={onChange}
          label={"Duração em dias"}
          name={"duration"}
          value={form.duration}
          type={"number"}
        />
        <Button variant="contained" type="submit">
          Criar
        </Button>
      </FormContainer>
    </div>
  );
}

export default CreateTripPage;
