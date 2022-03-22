import React from "react";
import CardGrande from "./components/CardGrande/CardGrande";
import CardPequeno from "./components/CardPequeno/CardPequeno";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import styled from 'styled-components';



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
           Como nem todo dev é de ferro  gosto de jogar uns joguinhos de hearthstone,mobile legends e assistir,assistir tv e praticar algum exercicio fisico"
        />

        <ImagemButton
          imagem="https://cdn-icons-png.flaticon.com/512/190/190250.png"
          texto="Ver mais"
        />
      </BioContainer>
     
    
      
      <CardPequeno
       imagem="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/32/000000/external-email-interface-kiranshastry-lineal-kiranshastry.png"
        textoNegrito=" Email: "
        texto=" michael_nickolas@hotmail.com"
      />

      <CardPequeno
        imagem="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/32/000000/external-pin-multimedia-kiranshastry-lineal-kiranshastry.png"
        textoNegrito="Endereço:"
        texto="Rua Bomfim do Prado"
      />

      <BioContainer>
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="data:image/png;base64,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"
          nome="Labenu Curso"
          descricao="Dev. Web Full Stack"
        />

        <CardGrande
        link="https://www.linkedin.com/in/michael-soto-81195a89/"
          imagem="data:image/png;base64,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"

          nome="Faculdade Estácio"
          descricao="Sistema de Informação"
        />
      </BioContainer>

      <BioContainer>
        <h2>Minhas redes sociais</h2>
       
       <a href="https://www.linkedin.com/in/michael-soto-81195a89/">
        <ImagemButton
          imagem="data:image/png;base64,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"
          texto="Linkedin"
        />
</a>

<a href="https://github.com/nicksoto1">
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
