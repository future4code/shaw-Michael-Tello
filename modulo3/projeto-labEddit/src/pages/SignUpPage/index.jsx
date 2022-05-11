import {
  Box,
  Typography,
  Container,
} from "@mui/material";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";
// import { useNavigate } from "react-router-dom";
import { SignUpForm } from "./SignUpForm";

export function SignUpPage() {
  useUnprotectedPage();
  // const navigate = useNavigate();

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

        <SignUpForm />
      </Box>
    </Container>
  );
}
