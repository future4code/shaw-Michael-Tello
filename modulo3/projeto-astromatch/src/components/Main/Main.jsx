import React, { useState } from "react";
import AppBar from "../AppBar/AppBar";
import ChooseProfilePage from "../ChooseProfilePage/ChooseProfilePage";
import MatchListPage from "../MatchListPage/MatchListPage";
import * as S from "./styled";

function Main() {
const [selectPage,setSelectPage] = useState('choose-profile')


const renderSelectedPage = ()=> {
  switch (selectPage) {
    case 'choose-profile':
      return <ChooseProfilePage/>
      case 'match-list':
        return <MatchListPage/>
  
    default:
      return <ChooseProfilePage/>
  }
}

const goToChooseProfilePage = ()=> {
  setSelectPage('match-list')
}

const gotToMatchListPage = ()=> {
  setSelectPage('choose-profile')
}

  return (
    <S.MainContainer maxWidth="sm">
      <AppBar 
      goToChooseProfilePage={goToChooseProfilePage}
      gotToMatchListPage={gotToMatchListPage}
      />
      {renderSelectedPage()}
    </S.MainContainer>
  );
}

export default Main;
