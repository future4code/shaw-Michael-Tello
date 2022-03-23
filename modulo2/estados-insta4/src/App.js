import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

<Post
          nomeUsuario={'michael'}
          fotoUsuario={'https://github.com/nicksoto1.png'}
          fotoPost={'https://picsum.photos/220/150'}
        />

<Post
          nomeUsuario={'ana'}
          fotoUsuario={'https://www.sonoticias.com.br/wp-content/uploads/2018/08/2725160-ana-maria-braga-afastou-os-rumores-de-br-650x488-2.jpg'}
          fotoPost={'https://picsum.photos/210/150'}
        />
      </MainContainer>
    );
  }
}

export default App;
