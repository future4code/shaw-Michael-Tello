import React from "react";
import axios from "axios";
import { baseUrl, headers } from "../constants";
import styled from "styled-components";
import TelaDetalheUsuario from "./TelaDetalheUsuario";

const CardUsuario = styled.div`
  border: 1px solid #000;
  padding: 10px;
  margin: 10px;
  width: 300px;
  display: flex;
  justify-content: space-between;
`;

const DeleteButton = styled.span`
  color: red;
  cursor: pointer;
`;

class TeleListaUsuarios extends React.Component {
  // ANCHOR STATE
  state = {
    usuarios: [],
    paginaAtual: "usuarios",
    usuarioId: "",
    nome: "",
  };

  componentDidMount() {
    this.pegarUsuarios();
  }

  //ANCHOR GET
  //   pegarUsuarios = () => {
  //     axios
  //       .get(baseUrl, headers)
  //       .then((res) => {
  //         this.setState({ usuarios: res.data });
  //       })
  //       .catch((err) => {
  //         alert("Ocorreu um problema");
  //       });
  //   };
  pegarUsuarios = async () => {
    try {
      const res = await axios.get(baseUrl, headers);
      this.setState({ usuarios: res.data });
    } catch (error) {
      alert("Ocorreu um problema");
    }
  };

  //   ANCHOR DELETE
  deletarUsuario = (id) => {
    if (window.confirm("Tem certeza de que deseja deletar?")) {
      axios
        .delete(`${baseUrl}/${id}`, headers)
        .then((res) => {
          alert("Usuário apagado com sucesso!");
          this.pegarUsuarios();
        })
        .catch((err) => {
          alert("Erro ao apagar usuario");
        });
    }
  };

  //   ANCHOR GET
  pesquisarUsuario = () => {
    axios
      .get(`${baseUrl}/search?name=${this.state.name}&email=`, headers)
      .then((response) => {
        this.setState({ usersList: response.data });
      })
      .catch((error) => {
        alert("Erro ao criar o usuário");
        console.log(error);
      });
  };

  //   ANCHOR EVENTOS
  alterarPagina = (userId) => {
    console.log("funcaoFoiChamada");
    this.state.paginaAtual === "userList"
      ? this.setState({ paginaAtual: "detalheUsuario", userId: userId })
      : this.setState({ paginaAtual: "usersList", userId: "" });
  };

  onChangeNome = (event) => {
    const novoValorNome = event.target.value;
    this.setState({ name: novoValorNome });
  };

  render() {
    // const listaUsuarios = this.state.usuarios.map((user) => {
    //   return (
    //     <CardUsuario key={user.id}>
    //       {user.name}
    //       <DeleteButton onClick={() => this.deletarUsuario(user.id)}>X</DeleteButton>
    //     </CardUsuario>
    //   );
    // });

    return (
      <div>
        {this.state.paginaAtual === "usuarios" ? (
          <div>
            <ul>
              {this.state.usuarios.length === 0 && <div>Carregando...</div>}
              {this.state.usuarios.map((user) => {
                return (
                  <li>
                    <span onClick={() => this.alterarPagina(user.id)}>
                      {user.name}
                    </span>
                    <DeleteButton onClick={() => this.deletarUsuario(user.id)}>
                      X
                    </DeleteButton>
                  </li>
                );
              })}
            </ul>
            <hr />
            <h4>Procurar usuário</h4>
            <input
              placeholder="Nome exato para busca"
              type="text"
              value={this.state.name}
              onChange={this.onChangeNome}
            />
            <button onClick={this.pesquisarUsuario}>Salvar edição</button>
          </div>
        ) : (
          <TelaDetalheUsuario
            userId={this.state.userId}
            changePage={this.alterarPagina}
          />
        )}

        {/* <button onClick={this.props.onClickTelaCadastro}>
          Ir para Cadastro
        </button>
        <h2> Lista de Usuarios</h2>
        {listaUsuarios} */}
      </div>
    );
  }
}

export default TeleListaUsuarios;
