import { TextField, Box, Button, Alert, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { goToSignUpPage } from "../../routes/coordinator";
// import { DivLogin } from "../../pages/LoginPage/styled";

export default function FormLoginPage(props) {
  const state = props.state;

  const navigate = useNavigate();
  return (
    <>
      {!state && <Alert severity="error">Usuário não encontrado</Alert>}
      <Box onSubmit={props.OnSubmitLogin} component="form" sx={{ mt: 1 }}>
        <Typography variant="h5" textAlign={"center"}>
          Faça seu login
        </Typography>

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

        <Button
          type={"submit"}
          fullWidth
          variant={"contained"}
          sx={{ mt: 3, mb: 2 }}
        >
          Fazer Login
        </Button>

        <Button
          onClick={() => goToSignUpPage(navigate)}
          type={"submit"}
          fullWidth
          variant={"outlined"}
          color={"secondary"}
          sx={{ mb: 2 }}
        >
          Cadastre-se
        </Button>
      </Box>
    </>
  );
}
