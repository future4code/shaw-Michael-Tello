import Router from "./routes/Router";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./constants/theme";
import { Header } from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        className="AppContainer"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0",
          margin: "0",
        }}
      >
        <Header />
        <Router />
      </div>
    </ThemeProvider>
  );
}

export default App;
