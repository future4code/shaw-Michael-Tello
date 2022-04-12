import React from "react";
import TelaCadastro from "./components/TelaCadastro";
import TelaListaUsuarios from "./components/TelaListaUsuarios";
// import TelaDetalheUsuario from "./components/TelaDetalheUsuario";

class App extends React.Component {
  // ANCHOR STATE
  state = {
    telaAtual: "cadastro",
  };

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <TelaCadastro onClickTelaLista={this.onClickTelaLista} />;
      case "lista":
        return (
          <TelaListaUsuarios onClickTelaCadastro={this.onClickTelaCadastro} />
        );
      case "detalhe":
        return <TelaDetalheUsuario onClickTelaLista={this.onClickTelaLista} />;

      default:
        return <div>Erro! Página não encontrada :</div>;
    }
  };

  // ANCHOR EVENTOS
  onClickTelaCadastro = () => {
    this.setState({ telaAtual: "cadastro" });
  };

  onClickTelaLista = () => {
    this.setState({ telaAtual: "lista" });
  };

  onClickTelaDetalheUsuario = () => {
    this.setState({ telaAtual: "detalhe" });
  };

  render() {
    return <>{this.escolheTela()}</>;
  }
}

export default App;
