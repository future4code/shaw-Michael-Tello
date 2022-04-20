import React, { useEffect, useState } from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import ChooseButtons from "../ChooseButtons/ChooseButtons";
import { BASE_URL } from "../../constants/url";
import axios from "axios";

function ChooseProfilePage() {
  const [profileToChoose, setProfileToChoose] = useState({});

  useEffect(() => {
    axios
      .get(`${BASE_URL}/person`)
      .then((res) => {
        setProfileToChoose(res.data.profile);
      })
      .catch((err) => {
        alert("Erro no GET");
      });
  }, []);

  return (
    <div>
      <ProfileCard profile={profileToChoose} />
      <ChooseButtons />
    </div>
  );
}

export default ChooseProfilePage;
