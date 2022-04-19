import axios from "axios";
import React from "react";
import { baseUrl, headers } from '../constants';

class TelaCadastro extends React.Component {
  state = {
    nome: "",
    email: "",
  };

//   ANCHOR EVENTOS
  onChangeNome = (event) => {
    this.setState({ nome: event.target.value });
  };

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };


//   ANCHOR POST
fazerCadastro = () => {
const body = {
    name: this.state.nome,
    email:this.state.email
}
    axios.post(baseUrl,body,headers)
 
  .then((res)=> {
alert('Usuario cadastrado com sucesso!')
this.setState({nome:'',email:''})
  })
  .catch((err)=> {
alert(err.response.data.message)
  })
}


  render() {
    return (
      <>
        <button onClick={this.props.onClickTelaLista}>
          Ir para lista de Usuarios
        </button>
        <h2> Cadastro</h2>
        <input
          type="text"
          placeholder={"Nome"}
          onChange={this.onChangeNome}
          value={this.state.nome}
        />
        <input
          type="email"
           placeholder={"E-mail"}
          onChange={this.onChangeEmail}
          value={this.state.email}
        />
        <button onClick={this.fazerCadastro}>Cadastrar</button>
      </>
    );
  }
}

export default TelaCadastro;
