import Fab from "@material-ui/core/Fab";
import React from "react";
import * as S from "./styled";

function ChooseButtons(props) {
  return (
    <S.ButtonsContainer>
      <Fab size="medium" onClick={props.onClickNo}>
        <S.CloseIcon />
      </Fab>

      <Fab size="medium" onClick={props.onClickYes}>
        <S.HeartIcon />
      </Fab>
    </S.ButtonsContainer>
  );
}

export default ChooseButtons;
