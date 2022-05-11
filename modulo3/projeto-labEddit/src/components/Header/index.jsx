import React, { useContext } from "react";
import { Context } from "../../global/Context";
import { Toolbar, Button } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import { goToFeedPage, goToLogin } from "../../routes/coordinatos";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";

export function Header() {
  const token = localStorage.getItem('token')
  const navigate = useNavigate;

  const dados = useContext(Context);
 


  const logout = () => {
    localStorage.removeItem("token");
  };

  const rightButtonAction = () => {
    if (dados.token) {
      logout();
      dados.state.setRightButtonText("Login");
      goToLogin(navigate);
    } else {
      goToLogin(navigate);
    }
  };

  return (
    <S.Nav position="static" color="secondary">
      <Toolbar>
        <S.Logo onClick={() => goToFeedPage(navigate)}>
          <AdbIcon />
          <p> LABENU</p>
        </S.Logo>
        <Button onClick={rightButtonAction}>{dados.state.rightButtonText}</Button>
        {/* <Button onClick={() => goToLogin(navigate)}>Entrar</Button> */}
      </Toolbar>
    </S.Nav>
  );
}
