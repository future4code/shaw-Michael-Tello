import React from "react";
import styled from "styled-components";

export const ContainerMenu = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1em;
  gap: 2em;
  background-color: #1ccd5b;
  cursor: pointer;

  div:hover {
    color: #ffffff;
  }
`;

class Menu extends React.Component {
  render() {
    return (
      <ContainerMenu>
        <div onClick={this.props.onClickTelaLista}>ADICIONAR PLAYLIST</div>

        <div onClick={this.props.onClickTelaAdicionar}>LISTA PLAYLIST</div>
      </ContainerMenu>
    );
  }
}

export default Menu;
