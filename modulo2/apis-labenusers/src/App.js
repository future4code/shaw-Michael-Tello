import React from "react";
import axios from "axios";
import { baseUrl } from "./constants";
import { headers } from "./constants";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro.jsx";
import TelaUsarios from "./components/TelaUsuarios/TelaUsuarios.jsx";
// import * as S from "./styles";

class App extends React.Component {
  // ANCHOR State
  state = {
    inputName: "",
    inputEmail: "",
    listUsers: [],
    mostrar: false,
  };

  componentDidMount() {
    //Pegar todas as playlists
    this.getAllUsers();
  }

  // ANCHOR GET
  getAllUsers() {
    axios
      .get(baseUrl, headers)
      .then((res) => {
        this.setState({ listUsers: res.data });
      })
      .catch((err) => {
        alert(err.response.data);
      });
  }

  // ANCHOR POST
  criarUsuario = () => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail,
    };

    axios
      .post(baseUrl, body, headers)
      .then((res) => {
        //Pega todos os usuarios
        this.getAllUsers();
        alert("Usuario Cadastrado com Sucesso!");
        //Deixar o texto do input com um valor vazio
        this.setState({
          inputName: "",
          inputEmail: "",
        });
      })
      .catch((err) => {
        alert("Erro");
      });
  };

  // ANCHOR Deletar
  deletarUsuario = (id) => {
    axios
      .delete(`${baseUrl}${id}`, headers)
      .then((res) => {
        //Pega todos os usuarios
        this.getAllUsers();
        alert("Usuario apagado com sucesso");
      })
      .catch((err) => {
        alert("Erro ao apagar usuario");
      });
  };

  // ANCHOR Evento
  onChangeInputName = (event) => {
    this.setState({ inputName: event.target.value });
  };

  onChangeInputEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  onClickTrocaTela = () => {
    console.log(this.state.mostrar);
    this.setState({ mostrar: !this.state.mostrar });
  };

  render() {
    return (
      <>
        <button onClick={this.onClickTrocaTela}>Trocar Tela</button>
        <TelaCadastro
          inputName={this.state.inputName}
          inputEmail={this.state.inputEmail}
          onChangeInputEmail={this.onChangeInputEmail}
          onChangeInputName={this.onChangeInputName}
          mostrar={this.state.mostrar}
          criarUsuario={this.criarUsuario}
          onClickTrocaTela={this.onClickTrocaTela}
        />

        <TelaUsarios
          mostrar={this.state.mostrar}
          listUsers={this.state.listUsers}
          deletarUsuario={this.deletarUsuario}
        />
      </>
    );
  }
}

export default App;
