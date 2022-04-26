import Router from "./routes/Router";

import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

function App() {
  return (
    <AppContainer>
      <Router />
    
    </AppContainer>
  );
}

export default App;
