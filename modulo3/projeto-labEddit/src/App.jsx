import { Router } from "./routes/Router";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./constants/theme";
import CssBaseline from "@mui/material/CssBaseline";


function App() {
  return (
    
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    
  );
}

export default App;
