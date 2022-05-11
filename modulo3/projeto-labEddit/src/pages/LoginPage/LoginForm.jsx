import React, { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Box,
  Button,
} from "@mui/material";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/user";
import { goToSignUpPage } from "../../routes/coordinatos";

export function LoginForm() {  
  const { form, onChange, clear } = useForm({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const data = useContext(GlobalStateContext);

  //ANCHOR POST LOGIN
  const onSubmitForm = (event) => {
    event.preventDefault();
    login(form, clear, navigate, data.states.setRightButtonText);
  };

  return (
    <Box onSubmit={onSubmitForm} component="form" sx={{ mt: 1 }}>
      <TextField
        name={"email"}
        value={form.email}
        onChange={onChange}
        required
        margin="normal"
        fullWidth
        label={"Email"}
        type={"email"}
        autoComplete="email"
        autoFocus
      />
      <TextField
        name={"password"}
        value={form.password}
        onChange={onChange}
        margin="normal"
        required
        fullWidth
        label={"Password"}
        type={"password"}
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
        Continuar
      </Button>

      <Button
        onClick={() => goToSignUpPage(navigate)}
        type={"submit"}
        fullWidth
        variant={"outlined"}
        color={"primary"}
        sx={{ mb: 2 }}
      >
        Criar uma conta
      </Button>
    </Box>
  );
}
