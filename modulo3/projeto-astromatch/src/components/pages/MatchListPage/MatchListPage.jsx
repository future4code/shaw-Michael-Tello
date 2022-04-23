import React, { useEffect, useState } from "react";
import MatchListItem from "../../MatchListItem/MatchListItem";
import { BASE_URL } from "../../../constants/url";
import axios from "axios";

import styled from "styled-components";
import {  Stack } from "@mui/material";

export const ListContainer = styled.div`
  padding: 8px;
`;

function MatchListPage() {
  const [matches, setMatches] = useState([]);

  // ANCHOR GET
  useEffect(() => {
    axios
      .get(`${BASE_URL}/matches`)
      .then((res) => {
        setMatches(res.data.matches);
        return (
          <>
           <Stack spacing={2} sx={{ width: '100%' }}>
         
           </Stack>
          </>
        );
      })
      .catch((err) => {});
  }, []);

  return (
    <ListContainer>
      {matches.map((profile) => {
        return <MatchListItem key={profile.id} profile={profile} />;
      })}
        {/* {  const sucesso =  <Alert severity="error">This is an error message!</Alert>} */}
    </ListContainer>
    
  );
}

export default MatchListPage;
