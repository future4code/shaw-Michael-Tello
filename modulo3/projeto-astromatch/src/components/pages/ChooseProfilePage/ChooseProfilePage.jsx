import React, { useEffect, useState } from "react";
import ProfileCard from "../../ProfileCard/ProfileCard";
import ChooseButtons from "../../ChooseButtons/ChooseButtons";
import { BASE_URL} from "../../../constants/url";
import axios from "axios";

function ChooseProfilePage() {
  const [profileToChoose, setProfileToChoose] = useState(undefined);

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
      .catch((err) => {});
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
      {/* ANCHOR Renderiza a pagina quando é montado */}
      {profileToChoose ? (
        <>
          <ProfileCard profile={profileToChoose} />
          <ChooseButtons onClickNo={onClickNo} onClickYes={onClickYes} />
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default ChooseProfilePage;
