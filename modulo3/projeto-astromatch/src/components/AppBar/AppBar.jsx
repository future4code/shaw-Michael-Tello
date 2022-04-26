import { Typography } from "@mui/material";
import React from "react";
import * as S from "./styled";

function AppBar(props) {
  return (
    <>
      <S.BoxContainer>

        <S.ButtonScreen onClick={props.goToChooseProfilePage}>Tela Inicial</S.ButtonScreen >
        <S.ContainerTypography>
          <Typography variant="h4">Astromatch</Typography>
        </S.ContainerTypography>

        <S.ContainerMatchIcon>
          <S.ButtonMatch onClick={props.gotToMatchListPage} />
        </S.ContainerMatchIcon>
      </S.BoxContainer>
      
    </>
  );
}

export default AppBar;
