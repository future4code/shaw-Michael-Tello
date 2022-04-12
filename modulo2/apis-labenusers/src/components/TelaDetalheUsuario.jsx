import axios from "axios";
import React from "react";
import { baseUrl, headers } from "../constants";
import styled from "styled-components";
import TelaCadastro from "./TelaCadastro";
import TelaListaUsuarios from "./TelaListaUsuarios";

const CardUsuario = styled.div`
  border: 1px solid #000;
  padding: 10px;
  margin: 10px;
  width: 300px;
  display: flex;
  justify-content: space-between;
`;

class TelaDetalheUsuario extends React.Component {
  state = {
    detalheUsuario: [],
    edicaoUsuario: "edicaoBotao",
    name: "",
    email: "",
  };

  componentDidMount() {
    this.detalheUsuario();
  }

  // ANCHOR EVENTOS
  onChangeNome = (event) => {
    const novoValorNome = event.target.value;

    this.setState({ name: novoValorNome });
  };

  onChangeEmail = (event) => {
    const novoValorEmail = event.target.value;
    this.setState({ email: novoValorEmail });
  };

  alterarInputUsuario = () => {
    this.state.edicaoUsuario === "edicaoBotao"
      ? this.setState({ edicaoUsuario: "usuarioEditarFormulario" })
      : this.setState({ edicaoUsuario: "edicaoBotao" });
  };

  //ANCHOR GET
  detalheUsuario = (id) => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        headers
      )
      .then((res) => {
        this.setState({ detalheUsuario: res.data });
      })
      .catch((err) => {
        alert("Ocorreu um erro");
      });
  };

  //ANCHOR PUT
  criarUsuario = () => {
    const body = {
      name: this.state.nome,
      email: this.state.email,
    }
      .then((res) => {
        this.setState({ name: "", email: "" }), this.detalheUsuario();
        this.alterarInputUsuario();
        alert("Usuario editado com sucesso");
      })
      .catch((err) => {
        alert("Erro ao criar o usuario");
      });
  };
  render() {
    {
      console.log(this.state.detalheUsuario);
    }

    const edicaoUsuario =
      this.state.edicaoUsuario === "edicaoBotao" ? (
        <button onClick={this.alterarInputUsuario}>Editar usuario</button>
      ) : (
        <div>
          <input
            placeholder="Nome"
            value={this.state.name}
            onChange={this.onChangeNome}
          />

          <input
            placeholder="Email"
            value={this.state.email}
            onChange={this.onChangeEmail}
          />
          <button onClick={this.criarUsuario}>Salvar edição</button>
        </div>
      );

    return (
      <CardUsuario>
        <div>
          <p>{this.state.detalheUsuario.nome}</p>
          <p>{this.state.detalheUsuario.email}</p>
        </div>
        <div>{edicaoUsuario}</div>
        <hr />
        <button onClick={this.props.alterarPagina}>
          Voltar para lista de usuarios
        </button>
      </CardUsuario>
    );
  }
}

export default TelaDetalheUsuario;
