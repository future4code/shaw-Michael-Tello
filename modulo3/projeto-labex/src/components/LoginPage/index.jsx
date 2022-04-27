import { Button, TextField } from "@mui/material";
import PageTitle from "../PageTitle";

function LoginPage() {
  return (
    <div>
      <PageTitle title={"Login"} />
      <div className="LoginForm" style={{ display: "grid", gap: "1em" }}>
        <TextField label="Email" type="email" />
        <TextField label="Senha" type="senha" />
        <Button variant="contained" type="submit">
          Entrar
        </Button>
      </div>
    </div>
  );
}

export default LoginPage;
