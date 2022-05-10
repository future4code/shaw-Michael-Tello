import { TextField, FormControlLabel, Checkbox, Box } from "@mui/material";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/user";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";

export function LoginForm() {
  useUnprotectedPage();
  const navigate = useNavigate();

  const { form, onChange, clear } = useForm({
    email: "",
    password: "",
  });

  //ANCHOR POST LOGIN
  const handleSubmit = (event) => {
    event.preventDefault();
    login(form, clear, navigate);
  };

  return (
    <Box onSubmit={handleSubmit} component="form" sx={{ mt: 1 }}>
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
    </Box>
  );
}
