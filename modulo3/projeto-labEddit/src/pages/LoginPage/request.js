import axios from "axios";
import {  useState } from "react";
import { BaseURL } from "../../constants/BaseURL";


  export const LoginAction = (form, clear, navigate) => {

    const [state, setState] = useState(true);

// SECTION
const loginPage = () => {

  axios
      .post(`${BaseURL}/users/login`, form)
      .then((res) => {
          console.log('deu certo !');
        localStorage.setItem("token", res.data.token);
        clear();
        navigate("/FeedPage");
      })
      .catch((err) => {
          setState(false);
        setTimeout(() =>{
          setState(true);
        }, 3000)       
        clear();
        console.log(err);
      });
}

// SECTION
const signUpPage = () => {
	axios.post(`${BaseURL}/users/signup`, form)
	.then((res)=>{
localStorage.setItem('token',res.data.token)
clear()
navigate("/");
	})
	.catch((err)=>{
		alert('Erro no Cadastro')
	})
}
    

      return [state, loginPage,signUpPage]; 
  };