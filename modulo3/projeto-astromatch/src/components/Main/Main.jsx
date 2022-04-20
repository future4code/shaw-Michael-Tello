import React from "react";
import AppBar from "../AppBar/AppBar";
import ChooseProfilePage from "../ChooseProfilePage/ChooseProfilePage";
import MatchListPage from "../MatchListPage/MatchListPage"
import * as S from "./styled";

function Main() {




	
  return (
    <S.MainContainer maxWidth="sm">
      <AppBar />
			{/* <ChooseProfilePage/> */}
			<MatchListPage/>


			
    </S.MainContainer>
  );
}

export default Main;
