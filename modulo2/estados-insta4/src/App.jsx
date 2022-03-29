import React from "react";
import { MainContainer,Form } from "./styles";
import Post from "./components/Post/Post";



class App extends React.Component {
  state = {
    pessoas: [
      {
        id: "1",
        nomeUsuario: "Paulinha",
        fotoUsuario: "https://picsum.photos/50/50 ",
        fotoPost: "https://picsum.photos/200/150 ",
      },
      {
        id: "2",
        nomeUsuario: "Michael",
        fotoUsuario: "https://github.com/nicksoto1.png ",
        fotoPost: "https://picsum.photos/220/150 ",
      },
      {
        id: "3",
        nomeUsuario: "Ana",
        fotoUsuario:
          "https://www.sonoticias.com.br/wp-content/uploads/2018/08/2725160-ana-maria-braga-afastou-os-rumores-de-br-650x488-2.jpg ",
        fotoPost: "https://picsum.photos/210/150",
      },
    ],

    pessoasForm: [
      {
              nome: "João",
              sobrenome:"Garcia",
              email: "joao@f4.com"
      
            },
            {
              nome: "Amanda",
              sobrenome:"Farias",
              email: "amanda@f4.com"
            }
    ],
    valorInputNome: "",
    valorInputSobrenome: "",
    valorInputEmail: "" 
  };

 

  adicionaPessoa = ()=> {
    
    const novaPessoa = {
      nome:this.state.valorInputNome,
      sobrenome:this.state.valorInputSobrenome,
      email:this.state.valorInputEmail,
    }
  console.log(novaPessoa)

  const novoPessoas = [...this.state.pessoasForm, novaPessoa];

   this.setState({pessoasForm: novoPessoas})
  }

  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };
  onChangeInputSobrenome = (event) => {
    this.setState({ valorInputSobrenome: event.target.value });
  };
  onChangeInputEmail = (event) => {
    this.setState({ valorInputEmail: event.target.value });
  };

  render() {
  const listadeInputs = this.state.pessoasForm.map((pessoaForm)=>{
    console.log(pessoaForm)
    return (
  <p>
    {pessoaForm.nome} -   {pessoaForm.sobrenome} -   {pessoaForm.email}
  {/* key={pessoaForm.id}
  valorInputNome={pessoaForm.InputNome}
  valorInputSobrenome={pessoaForm.InputSobrenome}
  valorInputEmail={pessoaForm.InputEmail} */}
  </p>
    )
  })

    const listaDeComponentes = this.state.pessoas.map((pessoa) => {
      return (
        <Post
          key={pessoa.id}
          id={pessoa.id}
          valorNome={pessoa.nomeUsuario}
          valorFotoUsuario={pessoa.fotoUsuario}
          valorFotoPost={pessoa.fotoPost}
        />
      );
    });

    return <MainContainer>
      {listaDeComponentes}
      <Form>
    
            <input 
             value={this.state.valorInputNome}
            onChange={this.onChangeInputNome}
             placeholder={"Nome"}
              />

            <input
            value={this.state.valorInputSobrenome} 
             onChange={this.onChangeInputSobrenome}
              placeholder={"Sobrenome"}
               />

            <input
              value={this.state.valorInputEmail} 
             onChange={this.onChangeInputEmail}
               placeholder={"Email"} 
               />

            <button onClick={this.adicionaPessoa}>Adicionar</button>
          
      </Form>
        {listadeInputs}
      </MainContainer>;
  }
}

export default App;
