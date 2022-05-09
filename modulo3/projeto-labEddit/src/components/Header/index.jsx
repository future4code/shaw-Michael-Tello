import { AppBar, Button } from "@mui/material";
import * as S from "./styled";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <AppBar position="static">
      <S.StyledToolbar>
        <S.StyleImg src={logo} alt="logo" />
        <Button color="inherit">Login</Button>
      </S.StyledToolbar>
    </AppBar>
  );
}
