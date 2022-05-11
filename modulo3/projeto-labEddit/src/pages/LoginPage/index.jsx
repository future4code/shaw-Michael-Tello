
import { Box, Typography, Container } from "@mui/material";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";
import { LoginForm } from "./LoginForm";

export function LoginPage() {
  useUnprotectedPage();
  const navigate = useNavigate();

  

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

        <LoginForm />
      </Box>
    </Container>
  );
}
