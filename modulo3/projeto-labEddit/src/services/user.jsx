import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../constants/url";



export const LoginAction = (form,clear,navigate) => {
const [state,setState] = useState(true)

// SECTION
  const  loginPage = () => {
	axios
		.post(`${BASE_URL}/users/login`, form)
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
	axios.post(`${BASE_URL}/users/signup`, form)
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
}