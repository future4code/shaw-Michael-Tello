import React from "react";
import * as S from "./styles"

 class MessageForm extends React.Component {
state ={
  pessoas: [ ],
  valorInputNome: '',
  valorInputTexto: ''
}

// ANCHOR  Guarda a informação digitada no input
adicionaPessoa = () =>{

  const novaPessoa = {
    nome: this.state.valorInputNome,
    mensagem:this.state.valorInputTexto


    
  }



// ANCHOR  Copia o array de nome,texto e adiciona uma pessoa no final
const novoPessoas = [...this.state.pessoas,novaPessoa]


// ANCHOR  Atualiza o estado de nome e texto
this.setState({ pessoas: novoPessoas });

}
  
// ANCHOR  OnChange
  onChangeNome = (event) => {
    this.setState({valorInputNome: event.target.value})
  }

  onChangeTexto = (event) => {
    this.setState({valorInputTexto: event.target.value})
  }



 
  render() {
  // ANCHOR  Mapeia o array para o component 

const listadeComponentes = this.state.pessoas.map((pessoa)=>{
  return (
    <p> 
       {pessoa.nome} : {pessoa.mensagem}
        </p>
  )
})

  
    return <>
  
     <S.MessageFormContainer>
       <S.BalaoConversa>
     {listadeComponentes}
     </S.BalaoConversa>
<S.InputNome
type="text"
value={this.state.valorInputNome} 
 onChange={this.onChangeNome}
  placeholder="Nome" />

<S.InputTexto
type="text"
value={this.state.valorInputTexto}
onChange={this.onChangeTexto} 
 placeholder="Mensagem" />

	<S.Button onClick={this.adicionaPessoa}>Enviar</S.Button >
		</S.MessageFormContainer>
    
    </>
  }
}

export default MessageForm