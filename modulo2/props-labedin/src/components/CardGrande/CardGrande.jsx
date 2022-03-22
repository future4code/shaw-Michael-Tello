import React from 'react';
import styled from 'styled-components'

const BigcardContainer = styled.div`
   display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
    width: 40vw;

    >img{
        width: 50px;
        border-radius:50%;
    margin-right: 15px; 
    }

h4{
    margin-bottom: 15px;
}

div{
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
}
`;


function CardGrande(props) {
    return (
 
        <BigcardContainer>
          
               <img src={ props.imagem } />
             
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </BigcardContainer>
        
    )
}

export default CardGrande;