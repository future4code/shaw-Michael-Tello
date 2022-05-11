
import React, { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import {
  TextField,
  Grid,
  Box,
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";

import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";
import { signUp } from "../../services/user";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";

export function SignUpForm() {
  useUnprotectedPage();
  const navigate = useNavigate();
  const { form, onChange, clear } = useForm({
    userName: "",
    email: "",
    password: "",
  });

  const data = useContext(GlobalStateContext);

  //ANCHOR POST SIGNUP
  const onSubmitForm = (event) => {
    event.preventDefault();
    signUp(form, clear, navigate,data.states.setRightButtonText);
  };

  return (
    <Box onSubmit={onSubmitForm} component="form" noValidate sx={{ mt: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name={"userName"}
            value={form.userName}
            onChange={onChange}
            required
            fullWidth
            label={"Nome de usuário"}
            autoComplete="given-name"
            autoFocus
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            value={form.email}
            name={"email"}
            onChange={onChange}
            label={"E-mail"}
            required
            fullWidth
            id="email"
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name={"password"}
            value={form.password}
            onChange={onChange}
            required
            fullWidth
            label={"Senha"}
            type="password"
            autoComplete="new-password"
          />
        </Grid>

        <Grid container    item xs={12}>
          <Grid item xs={12}>
            <Typography variant="caption">
              {
                "Ao continuar, você concorda com o nosso Contrato de usuário e nossa Política de Privacidade"
              }
            </Typography>

            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="Eu concordo em receber emails sobre coisas legais no Labeddit"
            />
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Cadastrar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
