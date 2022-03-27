import React from "react";
import * as S from "./styles"

 class MessageForm extends React.Component {
  // constructor() {
    // super()
    state = {
      pessoas: [],
      valorInputNome: '',
  valorInputTexto: ''
    }
    
  // }


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
this.setState({valorInputNome: '',valorInputTexto:''})
}

// ANCHOR  Permite enviar os dados apertando Enter
onKeyDown = (event)=> {
  if (event.key === 'Enter') {
    event.preventDefault();
    event.stopPropagation();
    this.adicionaPessoa();
  }
}


// ANCHOR Ao clicar 2X deleta a conversa escolhida 
deleteMessage = (index) => {
 
   if (window.confirm('Tem certeza que deseja deletar essa mensagem?')) {
     let pessoasTemp =   [...this.state.pessoas]
   pessoasTemp.splice(index,1)  
  this.setState({pessoas: pessoasTemp})
    }
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
const listadeComponentes = this.state.pessoas.map((pessoa,index)=>(
    <p  
    className="remover" 
    onDoubleClick={()=> this.deleteMessage(index)}
    key={index}> 
       {pessoa.nome}  {': ' + pessoa.mensagem}
        </p>
))




    return (
       <S.MessageFormContainer>
       <S.BalaoConversa
     
       >
     {listadeComponentes}
     </S.BalaoConversa>

     <S.Form onKeyDown={this.onKeyDown}>
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

	<S.Button 
  type="submit"
  onClick={this.adicionaPessoa}>Enviar</S.Button >
  </S.Form>
		</S.MessageFormContainer>
    
    
    );
  }
}

export default MessageForm