import React from "react";
import * as S from "./styled";

function ProfileCard(props) {
  return (
    <S.ProfileCardContainer>
      <S.ProfilePicture src={props.profile.photo} />
      <S.ProfileInfo>
        <p>
          {props.profile.name}, {props.profile.age}
        </p>
        <p>{props.profile.bio}</p>
      </S.ProfileInfo>
    </S.ProfileCardContainer>
  );
}

export default ProfileCard;
