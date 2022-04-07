import React from "react";

import styled from "styled-components";
import Menu from "../Menu";

export const ContainerPlaylist = styled.div`
  color: white;
  background-color: #333131;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-self: 20%;
  gap: 1em;
  height: 100vh;

  label {
    font-weight: 800;
  }

  input {
    border: none;
    height: 5%;
  }

  button {
    height: 5%;
    width: 10%;
    cursor: pointer;
  }
`;

class AdicionarPlaylist extends React.Component {
  state = {
    playlist: "",
  };

  // ANCHOR EVENTOS
  onChangePlaylist = (event) => {
    this.setState({ playlist: event.target.value });
  };

  render() {
    return (
      <>
				<Menu />
				<ContainerPlaylist>
        <label>Adicionar Playlist</label>
        <input
          type="text"
          onChange={this.onChangePlaylist}
          value={this.state.nome}
        />
        <button>Salvar</button>
      </ContainerPlaylist>
			</>
    );
  }
}

export default AdicionarPlaylist;
