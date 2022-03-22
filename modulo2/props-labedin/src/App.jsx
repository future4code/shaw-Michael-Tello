import React from "react";
import CardGrande from "./components/CardGrande/CardGrande";
import CardPequeno from "./components/CardPequeno/CardPequeno";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import styled from 'styled-components';
import adress from './img/adress.png'
import email from './img/email.png'
import estacio from './img/estacio.png'
import labenu from './img/labenu.png'



export const Container = styled.div`
    display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;


export const BioContainer  = styled.div`
  width: 40vw;
  margin: 10px 0;

  >a {
   
      text-decoration-color: none;
  }
 

  >h3{
    text-align: center;
  margin-bottom: 20px; 
  }

  h2{
    display: flex;
  justify-content: center;
  margin-bottom: 20px;
  }
`






function App() {
  return (
    <Container>
      <BioContainer>
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://github.com/nicksoto1.png"
          nome="Michael Soto"
          descricao="Hey Guys moro na cidade de Aracaju e um dos meus maiores sonhos 
          é me tornar um desenvolvedor web profissional. 
           Como nem todo dev é de ferro  gosto de jogar uns joguinhos de hearthstone,mobile legends,assistir tv e praticar atividade fisica"
        />

        <ImagemButton
          imagem="https://cdn-icons-png.flaticon.com/512/190/190250.png"
          texto="Ver mais"
        />
      </BioContainer>
     
    
      
      <CardPequeno
       imagem={email}
        textoNegrito=" Email: "
        texto=" michael_nickolas@hotmail.com"
      />

      <CardPequeno
        imagem={adress}
        textoNegrito="Endereço:"
        texto="Rua Bomfim do Prado"
      />

      <BioContainer>
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem={labenu}
          nome="Labenu Curso"
          descricao="Dev. Web Full Stack"
        />

        <CardGrande
        imagem={estacio}
          nome="Faculdade Estácio"
          descricao="Sistema de Informação"
        />
      </BioContainer>

      <BioContainer>
        <h2>Minhas redes sociais</h2>
       
       <a href="https://www.linkedin.com/in/michael-soto-81195a89/" target="_blank">
        <ImagemButton
          imagem="data:image/png;base64,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"
          texto="Linkedin"
        />
</a>

<a href="https://github.com/nicksoto1" target="_blank">
        <ImagemButton
          imagem="https://pbs.twimg.com/profile_images/1414990564408262661/r6YemvF9_400x400.jpg"
          texto="Github"
        />
        </a>
      </BioContainer>
    </Container>
  );
}

export default App;
