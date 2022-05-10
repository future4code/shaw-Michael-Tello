import { TextField, Grid, Box } from "@mui/material";

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

  //ANCHOR POST SIGNUP
  const handleSubmit = (event) => {
    event.preventDefault();
    signUp(form, clear, navigate);
  };

  return (
    <Box onSubmit={handleSubmit} component="form" noValidate sx={{ mt: 5 }}>
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
            name={"email"}
            value={form.email}
            onChange={onChange}
            required
            fullWidth
            id="email"
            label={"E-mail"}
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
      </Grid>
    </Box>
  );
}
