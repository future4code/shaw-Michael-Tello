import React from 'react';
import styled from 'styled-components'

const SmallCardContainer = styled.div`
   display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
		width: 40vw;

	

 div{
	display: flex;
    align-items: center;
		padding: 1em;
		width: 100%;
}

img{
    width: 30px;
    margin-right: 10px;
   
}
`;


function CardPequeno(props) {
    return (
        <SmallCardContainer>
            <div>
						<img src={ props.imagem } />
                <h4>{ props.textoNegrito }</h4>
                <p>{ props.texto }</p>
            </div>
        </SmallCardContainer>
    )
}

export default CardPequeno;