import axios from "axios";
import { useState } from "react";
import { BaseURL } from "../constants/BaseURL";

export const LoginAction = (form, clear, navigate) => {
  const [state, setState] = useState(true);

  // SECTION
  const loginPage = () => {
    axios
      .post(`${BaseURL}/users/login`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        clear();
        navigate("/feed");
      })
      .catch((err) => {
        setState(false);
        alert("Erro no Login");
      });
  };

  // SECTION
  const signUpPage = () => {
		console.log(form);
    axios
      .post(`${BaseURL}/users/signup`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        clear();
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response);
        alert("Erro no Cadastro");
      });
  };

  return { state, loginPage, signUpPage };
};
