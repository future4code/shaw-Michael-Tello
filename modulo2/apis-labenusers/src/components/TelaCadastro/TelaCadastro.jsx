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
          value={this.props.inputName}
          onChange={this.props.onChangeInputName}
           />
      
          <input 
          placeholder="Email"
          value={this.props.inputEmail}
          onChange={this.props.onChangeInputEmail}
           />
        
        <Button
        onClick={this.props.criarUsuario}>Criar Usuario</Button>
         {this.props.componentsListUsers}
				</Container>
			)
    }
}

export default TelaCadastro;