import { Router } from "./routes/Router";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./constants/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { GlobalState } from "./global/GlobalState";

function App() {
  return (
    <GlobalState>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </GlobalState>
  );
}

export default App;
