import axios from "axios";
import React from "react";
import { BASE_URL, headers } from "../../constants/url";
import PlaylistDetail from "../PlaylistDetail";
import Playlists from "../Playlists/index";
import { ContainerPlaylist, CardPlayslist, DeleteButton } from "./styled";
// import { getListaPlaylist } from "../../services/requests";

class PlaylistManagerPage extends React.Component {
  // ANCHOR STATE
  state = {
    currentPage: "playlists",
    listaPlaylist: [],
  };

  changePage = (currentPage) => {
    this.setState({ currentPage: currentPage });
  };

  componentDidMount() {
    this.pegarPlaylists();
    // getListaPlaylist(this.savePlaylist)
  }

  // savePlaylist = (data) => {
  //   this.setState({ listaPlaylist: data });
  // };

  // ANCHOR GET
  pegarPlaylists = async () => {
    try {
      const res = await axios.get(BASE_URL, headers);
      this.setState({ listaPlaylist: res.data.result.list });
    } catch (error) {
      alert("Erro em pegar as playlists");
    }
  };

  //   ANCHOR DELETE
  deletarPlaylist = (playlistId) => {
    window.confirm("Tem certeza que deseja deletar?")
      ? axios.delete(`${BASE_URL}/${playlistId}`, headers).then((res) => {
          alert("Usuário apagado com sucesso!");
          this.pegarPlaylists();
        })
      : alert("Voce cancelou a operação");
  };

  render() {
    const renderCurrentPage = () => {
      switch (this.state.currentPage) {
        case "playlists":
          return <Playlists changePage={this.changePage} />;

        case "playlistDetail":
          return <PlaylistDetail changePage={this.changePage} />;

          default:
            return <Playlists/>;
      }
    };

    const listaPlaylist = this.state.listaPlaylist.map((lista) => {
      return (
        <CardPlayslist
          onClick={() => this.props.irParaDetalhePlaylist(lista.url)}
          key={lista.id}
        >
          {renderCurrentPage()}
          {lista.name}

          <DeleteButton onClick={() => this.deletarPlaylist(lista.id)}>
            X
          </DeleteButton>
        </CardPlayslist>
      );
    });

    return (
      <ContainerPlaylist>
        <label>Lista de Playlist</label>
        {listaPlaylist}
      </ContainerPlaylist>
    );
  }
}

export default PlaylistManagerPage;
