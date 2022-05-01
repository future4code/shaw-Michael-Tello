import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { labexURL } from "../../constants/labexAPI";
import { useForm } from "../../hooks/useForm";
import PageTitle from "../PageTitle";

function LoginPage() {
  const navigate = useNavigate();
  const { form, onChange, cleanFields } = useForm({
    email: "",
    password: "",
  });

  // ANCHOR EVENTO FORM
  const onSubmitLogin = (event) => {
    event.preventDefault();

    const body = {
      email: form.email,
      password: form.password,
    };

    // ANCHOR POST LOGIN
    axios
      .post(`${labexURL}/login`, body)
      .then((response) => {
        window.localStorage.setItem("token", response.data.token);
        navigate('/viagens');
      })
      .catch((error) => {
        alert('Erro no Post Login')
      });

    cleanFields();
  };

  return (
    <div>
      <PageTitle title={"Login"} />
      <div
        className="LoginForm"
        onSubmit={onSubmitLogin}
        style={{ display: "grid", gap: "1em" }}
      >
        <TextField
          label="Email"
          type="email"
          onChange={onChange}
          value={form.email}
          name={"email"}
          required
        />
        <TextField
          label="Senha"
          type="password"
          onChange={onChange}
          value={form.password}
          name={"password"}
          required
        />
        <Button variant="contained" type="submit">
          Entrar
        </Button>
      </div>
    </div>
  );
}

export default LoginPage;
