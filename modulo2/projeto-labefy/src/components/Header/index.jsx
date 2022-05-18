import React from "react";
import {ContainerMenu,Navigation,Log} from "./styled";

import guitar from "../../assets/guitar.png";



class Menu extends React.Component {
  render() {
    return (
      <ContainerMenu>
        <Log>
        <img src={guitar} alt="icone" />
          <h1>Labefy</h1>
          
        </Log>

        <Navigation>
          <div onClick={() => this.props.changePage("playlistCreationPage")}>
            Cadastrar Playlist
          </div>
          <div onClick={() => this.props.changePage("playlistManagerPage")}>
            Gerenciar Playlist
          </div>
        </Navigation>
      </ContainerMenu>
    );
  }
}

export default Menu;
