import React from "react";
import styled from "styled-components";

export const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;

  :hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  margin-right: 8px;
  height: 30px;
  width: 30px;
`;

function MatchListItem(props) {
  return (
    <ListItemContainer>
      <Avatar src={props.profile.photo} />
      <p>{props.profile.name}</p>
    </ListItemContainer>
  );
}

export default MatchListItem;
