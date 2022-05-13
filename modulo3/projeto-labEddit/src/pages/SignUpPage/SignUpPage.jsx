import axios from "axios";
import { useNavigate } from "react-router-dom";
import useForm from "../../Hooks/UseForm";
import { goToFeedPage } from "../../routes/coordinator";
import { BaseURL } from "../../constants/BaseURL";
import {DivRegister} from './styled'


export default function SignUpPage() {

    const navigate = useNavigate();

    const [form, onChange, clear] = useForm({username: '', email: '', password: ''})

    const OnSubmitRegister = (e) => {
        e.preventDefault();
        registerUser();
    }

    const registerUser = () => {
        axios.post(`${BaseURL}/users/signup`, form)
        .then((res) => {
           console.log(res);
           localStorage.setItem('token', res.data.token)
           goToFeedPage(navigate);
        }).catch((err) => {
            console.log(err);
        })
    }


  return (
    <DivRegister>
    <form onSubmit={OnSubmitRegister}>
      <h1>Registre-se</h1>
      <input
        type="text"
        name="username"
        onChange={onChange}
        value={form.username}
        className="form-control"
        placeholder="Nome de Usuário"
        required
      />
      <input
        type="email"
        name="email"
        onChange={onChange}
        value={form.email}
        className="form-control"
        placeholder="Email"
        required
      />
      <input
        type="text"
        name="password"       
        onChange={onChange}
        value={form.password}
        className="form-control"
        placeholder="Senha"
        pattern={"^.{8,30}"}
        title='Senha Deve Ter no Minimo 8 e No Máximo 30 Caracters'
        required
      />
      <button className="btn btn-primary" >Cadastrar</button>
    </form>
    </DivRegister>
  );
}
