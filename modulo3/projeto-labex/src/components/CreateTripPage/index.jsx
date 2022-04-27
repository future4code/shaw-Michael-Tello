import PageTitle from "../PageTitle";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { Button, TextField } from "@mui/material";
import { FormContainer } from "../FormContainer";

function CreateTripPage() {
  return (
    <div>
      <PageTitle title={"Criar viagem"} />
      <FormContainer>
        <TextField label="Nome" />
        <TextField label="Planeta" />
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          label="Data"
        />
        <TextField label="Descrição" />
        <TextField label="Duração em dias" type="number" />
        <Button variant="contained" type="submit">
          Entrar
        </Button>
      </FormContainer>
    </div>
  );
}

export default CreateTripPage;
