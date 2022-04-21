import React, { useEffect, useState } from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import ChooseButtons from "../ChooseButtons/ChooseButtons";
import { BASE_URL } from "../../constants/url";
import axios from "axios";

function ChooseProfilePage() {
  const [profileToChoose, setProfileToChoose] = useState({});

  // ANCHOR GET
  const getProfileChoose = () => {
    axios
      .get(`${BASE_URL}/person`)
      .then((res) => {
        setProfileToChoose(res.data.profile);
      })
      .catch((err) => {
        alert("Erro no GET");
      });
  };

    // ANCHOR POST
  const chooseProfile = (choice)=> {
    const body = {
      choice: choice,
      id: profileToChoose.id
    };

    axios
      .post(`${BASE_URL}/choose-person`, body)
      .then((res) => {})
      .catch((err) => {});
    getProfileChoose();
  }

  useEffect(() => {
    getProfileChoose();
  }, []);

  const onClickNo = () => {
    chooseProfile(false)
  };

  const onClickYes = () => {
    chooseProfile(true)
  };

  return (
    <div>
      <ProfileCard profile={profileToChoose} />
      <ChooseButtons onClickNo={onClickNo} onClickYes={onClickYes} />
    </div>
  );
}

export default ChooseProfilePage;
