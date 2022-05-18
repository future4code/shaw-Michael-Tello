import axios from "axios";
import React from "react";
import { ContainerPlaylist, PlaylistCreationForm } from "./styled";
import { BASE_URL, headers } from "../../constants/url";

class PlaylistCreationPage extends React.Component {
  state = {
    playlist: "",
  };

  // ANCHOR EVENTOS
  onChangePlaylist = (event) => {
    this.setState({ playlist: event.target.value });
  };

  // ANCHOR POST
  adicionarPlaylist = () => {
    const body = {
      name: this.state.playlist,
    };
    axios
      .post(BASE_URL, body, headers)
      .then((res) => {
        alert("Usuario cadastrado com sucesso!");
      })
      .catch((err) => {
        alert("Ocorreu um erro ao adicionar playlist");
      });
  };

  render() {
    return (
      <ContainerPlaylist>
        <h1>Cadastrar Playlist</h1>
        <PlaylistCreationForm>
          <label>Nova playlist</label>
          <input
            placeholder="Nome da Playlist"
            onChange={this.onChangePlaylist}
            value={this.state.nome}
          />
          <button onClick={this.adicionarPlaylist}>Adicionar</button>
        </PlaylistCreationForm>
      </ContainerPlaylist>
    );
  }
}

export default PlaylistCreationPage;
