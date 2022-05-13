import {
  TextField,
  FormControlLabel,
  Checkbox,
  Box,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { goToSignUpPage } from "../../routes/coordinatos";

export function LoginForm(props) {

  const state = props.state;

  const navigate = useNavigate();

  return (
    <>
    {!state && <div>Usuário não encontrado </div>}
    <Box
      onSubmit={props.onSubmitForm}
      component="form"
      sx={{ mt: 1 }}
    >
      <TextField
        type={"email"}
        name={"email"}
        value={props.form.email}
        onChange={props.onChange}
        required
        margin="normal"
        fullWidth
        label={"Email"}
        autoComplete="email"
        autoFocus
      />
      <TextField
        type={"password"}
        name={"password"}
        value={props.form.password}
        onChange={props.onChange}
        margin="normal"
        required
        fullWidth
        label={"Password"}
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />

      <Button
        type={"submit"}
        fullWidth
        variant={"contained"}
        sx={{ mt: 3, mb: 2 }}
      >
      Faça seu login
      </Button>

      <Button
        onClick={() => goToSignUpPage(navigate)}
        type={"submit"}
        fullWidth
        variant={"outlined"}
        color={"primary"}
        sx={{ mb: 2 }}
      >
         Cadastre-se
      </Button>
    </Box>
    </>
  );
}
