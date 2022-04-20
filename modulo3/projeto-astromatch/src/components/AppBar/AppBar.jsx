import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import * as S from "./styled";

function AppBar() {
  return (
    <>
      <S.BoxContainer>
        <S.ContainerTypography>
          <Typography variant="h4">Astromatch</Typography>
        </S.ContainerTypography>

        <S.ContainerMatchIcon>
          <S.MatchIcon />
        </S.ContainerMatchIcon>
      </S.BoxContainer>
      <hr />
    </>
  );
}

export default AppBar;
