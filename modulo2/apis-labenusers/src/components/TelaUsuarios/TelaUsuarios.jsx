import React from "react";
import styled from 'styled-components';

const Mae = styled.div`
display: ${(props) => props.mostrar === false ? 'none' : 'flex'};
flex-direction: column;
`
 const Filho1 = styled.div`
display: flex;
flex-direction: column;
`
 const Filho2 = styled.div`
 border-top:1px solid #000;
`

class Telausarios extends React.Component {


    onClickPesquisarNome=()=> {
        alert('Erro ao pesquisar')
    }

    render() {
        const componentsListUsers = this.props.listUsers.map((lista) => (
 <li key={lista.id}>{lista.name} <button onClick={() => this.props.deletarUsuario(lista.id)}>X</button></li>
 ))
        
        return (

            <Mae
                mostrar={this.props.mostrar}
            >
               
                <Filho1>
                    <ul>
                        {componentsListUsers}
                    </ul>
                </Filho1>

                <Filho2>
                   
                    <p>Procurar usuário</p>
                    <input
                        placeholder="Pesquisa"
                    />
                    <button onClick={this.onClickPesquisarNome}>Pesquisar</button>
                </Filho2>
            </Mae>
        )
    }
}

export default Telausarios; 