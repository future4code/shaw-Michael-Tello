import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
 display: ${(props) => props.mostrar === false ? 'flex' : 'none'};
`



 const Button = styled.button`
  
`

class TelaCadastro extends React.Component {
    render() {
        return (
				<Container
        mostrar={this.props.mostrar}
        >
				   
          <input 
          placeholder="Nome"
     
           />
      
          <input 
          placeholder="Email"

           />
        
        <Button
        onClick={this.props.criarUsuario}>Criar Usuario</Button>
        
				</Container>
			)
    }
}

export default TelaCadastro;