import { Box, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useForm from "../../Hooks/UseForm";
// import axios from "axios";
// import { goToFeedPage } from "../../routes/coordinator";
// import { BaseURL } from "../../constants/BaseURL";
// import {DivRegister} from './styled'
import FormSignUp from "../../components/FormSignUp/FormSignUp";
import { LoginAction } from "../../services/user";

import ImgBack from "../../img/dbz.jpg";

import styled from "styled-components";

const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  background: url(${ImgBack}) no-repeat fixed center center;
  background-size: cover;
  min-height: 100vh;
`;

export default function SignUpPage() {
  const navigate = useNavigate();

  const [form, onChange, clear] = useForm({
    username: "",
    email: "",
    password: "",
  });

  const { state, signUpPage } = LoginAction(form, clear, navigate);

  //ANCHOR POST SIGNUP
  const OnSubmitRegister = (e) => {
    console.log("ewfewf");
    e.preventDefault();
    signUpPage();
  };

  return (
    <SignUpContainer>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h4">
            Cadastre-se ;)
          </Typography>

          <FormSignUp
            onSubmitForm={OnSubmitRegister}
            form={form}
            onChange={onChange}
            state={state}
          />
        </Box>
      </Container>
    </SignUpContainer>
  );
}
