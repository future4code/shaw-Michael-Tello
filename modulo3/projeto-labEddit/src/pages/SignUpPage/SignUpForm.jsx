
import {
  TextField,
  Grid,
  Box,
  Button,
} from "@mui/material";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";
import { useNavigate } from "react-router-dom";


export function SignUpForm(props) {
  useUnprotectedPage();
  const navigate = useNavigate();
 

  return (
    <Box onSubmit={props.OnSubmitRegister} 
    component="form" 
    noValidate sx={{ mt: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name={"userName"}
            value={props.form.userName}
            onChange={props.onChange}
            required
            fullWidth
            label={"Nome de usuário"}
            autoComplete="given-name"
            autoFocus
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            value={props.form.email}
            name={"email"}
            onChange={props.onChange}
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
            value={props.form.password}
            onChange={props.onChange}
            fullWidth
            label={"Senha"}
            type="password"
            // pattern={"^.{8,30}"}
            title='Senha Deve Ter no Minimo 8 e No Máximo 30 Caracters'
            required
          />
        </Grid>

        <Grid container item xs={12}>
          <Button
            type={"submit"}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
           Cadastre-se
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
