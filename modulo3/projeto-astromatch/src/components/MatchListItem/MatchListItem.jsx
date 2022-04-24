import React from "react";
import * as S from "./styled";



function MatchListItem(props) {
  return (
    <S.ListItemContainer>
      <S.Avatar src={props.profile.photo} />
      <p>{props.profile.name}</p>
    </S.ListItemContainer>
  );
}

export default MatchListItem;
