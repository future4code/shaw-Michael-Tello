import {
  Button,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";
import { useNavigate } from "react-router-dom";
import { SignUpForm } from "./SignUpForm";

export function SignUpPage() {
  useUnprotectedPage();
  const navigate = useNavigate();

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

       <SignUpForm/>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="caption">
              {
                "Ao continuar, você concorda com o nosso Contrato de usuário e nossa Política de Privacidade"
              }
            </Typography>

            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="Eu concordo em receber emails sobre coisas legais no Labeddit"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Cadastrar
        </Button>
        <Grid container justifyContent="flex-end"></Grid>
      </Box>
    </Container>
  );
}
