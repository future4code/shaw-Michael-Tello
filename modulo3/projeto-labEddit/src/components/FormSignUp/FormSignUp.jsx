
import {
  TextField,
  Grid,
  Box,
  Button,
} from "@mui/material";
// import { useNavigate } from "react-router-dom";


export default function FormSignUp(props) {
  // const navigate = useNavigate();
	
	return (
		<Box onSubmit={props.onSubmitForm} 
    component="form" 
    noValidate sx={{ mt: 5 }}>
 <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name={"username"}
            value={props.form.username}
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
            onChange={props.onChange}
            name={"email"}
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
	)
}
