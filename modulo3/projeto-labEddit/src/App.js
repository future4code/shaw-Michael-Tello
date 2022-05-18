// import styled from "styled-components";
import Router from "./routes/router";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./constants/theme";
import CssBaseline from "@mui/material/CssBaseline";

// import ImgBack from "./img/win.jpg";

// const DivApp = styled.div`
//   display: flex;
//   justify-content: center;
//   background:  url(${ImgBack}) no-repeat fixed center center;
//   background-size: cover;
//   min-height: 100vh;
// `;

function App() {
  return (
    // <DivApp>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    // </DivApp>
  );
}

export default App;
