import { useNavigate } from "react-router-dom";
import useForm from "../../Hooks/UseForm";
import { Box, Container, Typography } from "@mui/material";
import ImgBack from "../../img/dbz.jpg";
// import { useUnprotectedPage } from "../../Hooks/UseUnprotectedPage";
import { LoginAction } from "./request";
import FormLoginPage from "../../components/FormLoginPage/FormLoginPage";
import styled from "styled-components";

// import axios from "axios";
// import { BaseURL } from "../../constants/BaseURL";
// import { goToFeedPage } from "../../routes/coordinator";

const DivApp = styled.div`
  display: flex;
  justify-content: center;
  background: url(${ImgBack}) no-repeat fixed center center;
  background-size: cover;
  min-height: 100vh;
`;

export default function LoginPage() {
  // useUnprotectedPage();
  const navigate = useNavigate();

  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const [state, loginPage] = LoginAction(form, clear, navigate);

  //ANCHOR POST LOGIN
  const OnSubmitLogin = (e) => {
    e.preventDefault();
    loginPage();
  };

 
  
  return (
    <DivApp>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 15,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h2" color={'primary'}>
            LabEddit
          </Typography>

          <FormLoginPage
            OnSubmitLogin={OnSubmitLogin}
            form={form}
            onChange={onChange}
            state={state}
          />
        </Box>
      </Container>
    </DivApp>
  );
}
