// import AdbIcon from '@material-ui/icons/Adb';
import { useState } from "react";


import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Tooltip,
  IconButton,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../../routes/coordinatos";
// import AdbIcon from '@material-ui/icons/Adb';

export function Header() {
  const navigate = useNavigate;
  const token = localStorage.getItem("token");
  const [rightButtonText, setRightButtonText] = useState(
    token ? "Logout" : "Login"
  );

  const logout = () => {
    localStorage.removeItem("token");
  };

  const rightButtonAction = () => {
    if (token) {
      logout();
      setRightButtonText('Login')
      goToLogin(navigate)
    }else{
      goToLogin(navigate)
    }
  };

  return (
    <AppBar color="secondary" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            // href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {/* <AdbIcon /> */}
            Labenu
          </Typography>

          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Labenu
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Button onClick={rightButtonAction}>
                  {rightButtonText}
                </Button>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
