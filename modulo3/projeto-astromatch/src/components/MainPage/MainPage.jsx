import React, { useState } from "react";
import AppBar from "../AppBar/AppBar";
import ChooseProfilePage from "../pages/ChooseProfilePage/ChooseProfilePage";
import MatchListPage from "../pages/MatchListPage/MatchListPage";
import ResetButton from '../ResetButton/ResetButton'
import * as S from "./styled";

function MainPage() {
const [selectPage,setSelectPage] = useState('choose-profile')


// ANCHOR NAVEGAÇÃO
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
  setSelectPage('choose-profile')
}

const gotToMatchListPage = ()=> {
  setSelectPage('match-list')
}

  return (
    <>
    <S.MainContainer maxWidth="sm">
      <AppBar 
      goToChooseProfilePage={goToChooseProfilePage}
      gotToMatchListPage={gotToMatchListPage}
      />
      {renderSelectedPage()}
    </S.MainContainer>
    <ResetButton/>
    </>
  );
}

export default MainPage;
