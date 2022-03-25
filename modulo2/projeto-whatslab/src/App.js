import React from "react";
import MessageForm from "./components/MessageForm/MessageForm";
import styled from "styled-components";

export const Container = styled.div`
 display: flex;
 justify-content: center;
`;



function App() {
  return (
    <Container>
      <MessageForm></MessageForm>
    </Container>
  );
}

export default App;
