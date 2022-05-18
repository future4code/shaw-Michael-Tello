import React, { useEffect, useState } from "react";
import ProfileCard from "../../ProfileCard/ProfileCard";
import ChooseButtons from "../../ChooseButtons/ChooseButtons";
import { BASE_URL } from "../../../constants/url";
import axios from "axios";

import Skeleton from "@mui/material/Skeleton";


function ChooseProfilePage() {
  const [profileToChoose, setProfileToChoose] = useState(undefined);

  // ANCHOR  GET
  const getProfileChoose = () => {
    axios
      .get(`${BASE_URL}/person`)
      .then((res) => {
        setProfileToChoose(res.data.profile);
      })
      .catch((err) => {
        alert("Erro no  getProfileChoose");
      });
  };

  useEffect(() => {
    getProfileChoose();
  }, []);

  // ANCHOR POST
  const chooseProfile = (choice) => {
    const body = {
      choice: choice,
      id: profileToChoose.id,
    };
    setProfileToChoose(undefined);
    axios
      .post(`${BASE_URL}/choose-person`, body)
      .then((res) => {
        getProfileChoose();
      })
      .catch((err) => {
        alert("Erro no POST Choose Person");
      });
  };

  // ANCHOR EVENTOS
  const onClickNo = () => {
    chooseProfile(false);
  };

  const onClickYes = () => {
    chooseProfile(true);
  };

  return (
    <div>
      {profileToChoose ? (
        <>
          <ProfileCard profile={profileToChoose} />
          <ChooseButtons onClickNo={onClickNo} onClickYes={onClickYes} />
        </>
      ) : (
       <>
          <Skeleton  />
          Carregando...
          <Skeleton variant="rectangular"  width={530} height={420} />
          </>
      )}
    </div>
  );
}

export default ChooseProfilePage;
