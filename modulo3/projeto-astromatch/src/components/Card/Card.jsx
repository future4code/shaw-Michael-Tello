import { Box, Typography } from "@mui/material";
import React from "react";
import * as S from "./styled";

function Card() {
  return (
    <S.CardContainer maxWidth="sm">
      <Box sx={{ my: 4, ml: 15 }}>
        <Typography variant="h4">Astromatch</Typography>
      </Box>
    </S.CardContainer>
  );
}

export default Card;
