import React, { useEffect, useState } from "react";
import MatchListItem from "../MatchListItem/MatchListItem";
import { BASE_URL } from "../../constants/url";
import axios from "axios";

import styled from "styled-components";

export const ListContainer = styled.div`
  padding: 8px;
`;

function MatchListPage() {
	const [matches, setMatches] = useState([]);

	useEffect(() => {
    axios
      .get(`${BASE_URL}/matches`)
      .then((res) => {
        setMatches(res.data.matches);
      })
      .catch((err) => {
        alert("Erro no GET");
      });
  },[]);

  return (
    <ListContainer>
      {matches.map(profile => {
        return <MatchListItem profile={profile} />;
      })}
    </ListContainer>
  );
}

export default MatchListPage;
