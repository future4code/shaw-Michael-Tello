import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import * as S from "./styled";

function AppBar(props) {
  return (
    <>
      <S.BoxContainer>
        <S.ButtonScreen onClick={props.gotToMatchListPage}>Tela Principal</S.ButtonScreen>
        <S.ContainerTypography>
          <Typography variant="h4">Astromatch</Typography>
        </S.ContainerTypography>

        <S.ContainerMatchIcon>
          <S.ButtonMatch onClick={props.goToChooseProfilePage} />
        </S.ContainerMatchIcon>
      </S.BoxContainer>
      <hr />
    </>
  );
}

export default AppBar;
