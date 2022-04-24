import React, { useEffect, useState } from "react";
import MatchListItem from "../../MatchListItem/MatchListItem";
import { BASE_URL } from "../../../constants/url";
import axios from "axios";

import styled from "styled-components";


const ListContainer = styled.div`
  padding: 0.5em;
`;

function MatchListPage() {
  const [matches, setMatches] = useState([]);

  // ANCHOR GET
  useEffect(() => {
    axios
      .get(`${BASE_URL}/matches`)
      .then((res) => {
        setMatches(res.data.matches);
      })
      .catch((err) => {
        alert("Erro no Get Matches");
      });
  }, []);

  // ANCHOR MAP DE MATCHES
  const listPage = matches.map((profile) => {
      return <MatchListItem key={profile.id} profile={profile} />;
    })
 
  return (
    <ListContainer>
      {listPage}
    </ListContainer>
  );
}

export default MatchListPage;
