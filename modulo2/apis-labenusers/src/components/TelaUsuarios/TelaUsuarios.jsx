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
`

class Telausarios extends React.Component {
    render() {
        // const componentsListUsers = this.props.listUsers.map((lista) => {
        //     return <li key={lista.id}>{lista.name} <button onClick={() => this.props.deleteUser(lista.id)}>X</button></li>

        //  })
        return (

            <Mae
                mostrar={this.props.mostrar}
            >
                fwefewfewf
                <Filho1>
                    <ul>
                        {/* {componentsListUsers} */}
                    </ul>
                </Filho1>

                <Filho2>
                    <p>Procurar usuário</p>
                    <input
                        placeholder="Pesquisa"
                    />
                    <button>Salvar edição</button>
                </Filho2>
            </Mae>
        )
    }
}

export default Telausarios; 