import React from "react";
import styled from "styled-components";

import { IconeComContador } from "../IconeComContador/IconeComContador";

import iconeCoracaoBranco from "../../img/favorite-white.svg";
import iconeCoracaoVermelho from "../../img/favorite-red.png";
import iconeComentario from "../../img/comment_icon.svg";
import iconeSalvoBranco from "../../img/save.png";
import iconeSalvoAzul from "../../img/saveActive.png";
import iconeCompartilhaBranco from "../../img/share.svg";

// import facebook from '../../img/facebook.png'
// import instagram from '../../img/instagram.png'
// import twitter from '../../img/twitter.png'

import { SecaoComentario } from "../SecaoComentario/SecaoComentario";
import SecaoCompartilha from '../SecaoCompartilha/SecaoCompartilha'



const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`;

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`;

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`;

const PostPhoto = styled.img`
  width: 100%;
`;

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,

    comentando: false,
    numeroComentarios: 0,

    salvando: false,
    numeroSalvos: 0,

    compartilhado: false,
    numeroCompartilhados: 0

  };

  onClickCurtida = () => {
    this.setState({ curtido: !this.state.curtido });
    console.log("Curtiu!");
  };

  onClickComentario = () => {
    this.setState({ comentando: !this.state.comentando });
  };

  onClickSalvo = () => {
    this.setState({ salvando: !this.state.salvando });
    console.log("Salvo!");
  };

  onClickCompartilha = () => {
    this.setState({ compartilhado: !this.state.compartilhado });
    console.log("Compartilhado!");
  };


  
  aoEnviarSecaoCompartilha = () => {
    this.setState({
      compartilhado: false,
      numeroCompartilhados: this.state.numeroCompartilhados + 1,
    });
  };

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
    });
  };

  render() {
    let iconeCurtida;
    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoVermelho;
      this.state.numeroCurtidas = 1;
    } else {
      iconeCurtida = iconeCoracaoBranco;
      this.state.numeroCurtidas = 0;
    }

    let iconeSalvo;
    if (this.state.salvando) {
      iconeSalvo =  iconeSalvoAzul;
      ;
      this.state.numeroSalvos = 1;
    } else {
      iconeSalvo =iconeSalvoBranco
      this.state.numeroSalvos = 0;
    }

    // let componenteCompartilha;
    // if (this.state.compartilhado) {
    //   componenteCompartilha = (
    //     // <SecaoComentario aoEnviar={this.aoEnviarComentario} />
    //   );
    // }

    let componenteComentario;
    if (this.state.comentando) {
      componenteComentario = (
        <SecaoComentario aoEnviar={this.aoEnviarComentario} />
      );
    }

    let componenteCompartilha;
    if (this.state.compartilhado) {
      console.log(this.state.compartilhado)
      componenteCompartilha = (
        <SecaoCompartilha aoEnviar={this.aoEnviarSecaoCompartilha} />
      );
    }

    return (
      <PostContainer>
        <PostHeader>
          <UserPhoto src={this.props.fotoUsuario} alt={"Imagem do usuario"} />
          <p>{this.props.nomeUsuario}</p>
        </PostHeader>

        <PostPhoto src={this.props.fotoPost} alt={"Imagem do post"} />

        <PostFooter>
          <IconeComContador
            icone={iconeCurtida}
            onClickIcone={this.onClickCurtida}
            valorContador={this.state.numeroCurtidas}
          />

          <IconeComContador
            icone={iconeComentario}
            onClickIcone={this.onClickComentario}
            valorContador={this.state.numeroComentarios}
          />

          <IconeComContador
            icone={iconeSalvo }
            onClickIcone={this.onClickSalvo}
            valorContador={this.state.numeroSalvos}
          />

<IconeComContador
            icone={iconeCompartilhaBranco }
            onClickIcone={this.onClickCompartilha}
            valorContador={this.state.numerosCompartilhados}
          />
        </PostFooter>
        {componenteComentario}
        {componenteCompartilha}
      </PostContainer>
    );
  }
}

export default Post;
