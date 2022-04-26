import React from "react";
import styled from "styled-components";
import "./styles.css";

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${ props  => props.completa ? "line-through" : "none"};
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

class App extends React.Component {
  state = {
    tarefas: [
      {
        id: Date.now(),
        texto: "Texto da primeira tarefa",
        completa: false,
      },
      {
        id: Date.now(),
        texto: "Texto da segunda tarefa",
        completa: true,
      },
    ],
    inputValue: "",
    filtro: "",
  };

  componentDidUpdate(prevState) {
    // prevState.tarefas === this.state.tarefas
    //   ? this.criaTarefa()
    //   : console.log("lógica do didUpdate do perfil!!!!!");
    // if(prevState.cidade === this.props.cidade){
    //   this.onclickBotaoSalvaInformacoes()
    //   console.log("lógica do didUpdate do perfil!!!!!")
    // }
  }

  componentDidMount() {
    // this.buscarElementosDoLocalStorange()
  }

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  criaTarefa = () => {  
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
    };
    const novaListaTarefa = [novaTarefa, ...this.state.tarefas];
    this.setState({ tarefas: novaListaTarefa });

    localStorage.setItem("id", JSON.stringify(this.state.id));
    localStorage.setItem("texto", JSON.stringify(this.state.texto));
    localStorage.setItem("completa", JSON.stringify(this.state.completa));
  };

  selectTarefa = (id) => {
    const novaListadeTarefas = this.state.tarefas.map((list) => {
      if (id == list.id) {
        const novoList = {
          ...list,
          completa: !list.completa,
        };
        return novoList;
      } else {
        return list;
      }
    });
    this.setState({ tarefas: novaListadeTarefas });
  };

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value });
    // console.log("Filtrei agora");
  };

  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case "pendentes":
          return !tarefa.completa;
        case "completas":
          return tarefa.completa;
        default:
          return true;
      }
    });

    const listaMap = listaFiltrada.map((tarefa) => (
      <div
        onClick={() => this.selectTarefa(tarefa.id)}
      >
        <Tarefa
        completa = {tarefa.completa}
        >
        {tarefa.texto}
        </Tarefa>
        
      </div>
    ));

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>{listaMap}</TarefaList>
      </div>
    );
  }
}

export default App;
