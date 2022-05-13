import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { Box, Typography, Container } from "@mui/material";
import logo from "../../assets/logo.png";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";
import { LoginAction } from "../../services/user";
import { LoginForm } from "./LoginForm";


export function LoginPage() {
  useUnprotectedPage();
  const navigate = useNavigate();

  const { form, onChange, clear } = useForm({
    email: "",
    password: "",
  });
  const [state, loginPage] = LoginAction(form, clear, navigate);

  //ANCHOR POST LOGIN
  const onSubmitLogin = (event) => {
    event.preventDefault();
    loginPage();
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={logo} alt="logo" width="40px" />

        <Typography component="h1" variant="h5">
          LabEddit
        </Typography>

        <LoginForm
          onSubmitForm={onSubmitLogin}
          form={form}
          onChange={onChange}
          state={state}
        />
      </Box>
    </Container>
  );
}
