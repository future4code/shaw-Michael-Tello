import React from "react";
import Home from "./components/Home/";
import AdicionarPlaylist from "./components/AdicionarPlaylist";
import ListaPlaylists from "./components/ListaPlaylists";

class src extends React.Component {
  state = {
    telaAtual: "adicionarPlaylist",
    mostrarTela:false
  };

  // ANCHOR EVENTOS
  // escolheTela = () => {
  //   switch (this.state.telaAtual) {
  //     case "adicionarPlaylist":
  //       return <AdicionarPlaylist onClickTelaLista={this.onClickTelaLista} />;

  //     case "listaPlaylist":
  //       return (
  //         <ListaPlaylists ={this.onClickTelaAdicionar} />
  //       );

  //     default:onClickTelaAdicionar
  //       alert("ERRO na navegação");
  //   }
  // };



  render() {
    return (


      <>
      {this.state.mostrarTela ? <p>Esta mostrando</p> : <div></div>}
        <Home />
        {/* {this.escolheTela()} */}


      </>
    );
  }
}

export default src;
