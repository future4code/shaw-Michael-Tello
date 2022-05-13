import {
  Box,
  Typography,
  Container,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";
import { SignUpForm } from "./SignUpForm";
import { LoginAction } from "../../services/user";



export function SignUpPage() {
  useUnprotectedPage();
  const navigate = useNavigate();

  const { form, onChange, clear } = useForm({
    userName: "",
    email: "",
    password: "",
  });

  const [state,signUpPage] = LoginAction(form,clear,navigate)

   //ANCHOR POST SIGNUP
   const OnSubmitRegister = (event) => {
    event.preventDefault();
    signUpPage();
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Olá, boas vindas ao LabEddit ;)
        </Typography>

        <SignUpForm 
        onSubmitForm = {OnSubmitRegister}
        form={form}
        onChange={onChange}
        state={state}
        />
      </Box>
    </Container>
  );
}
