import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../constants/url";
import { goToFeedPage, goToLogin } from "../routes/coordinatos";


export const login = (body,clear,navigate) => {
	axios
		.post(`${BASE_URL}/users/login`, body)
		.then((res) => {
			localStorage.setItem("token", res.data.token);
			clear();
			goToFeedPage(navigate)
		})
		.catch((err) => {
			alert("Erro no Login");
		});
};

export const signUp = (body,clear,navigate) => {
	axios.post(`${BASE_URL}/users/signup`, body)
	.then((res)=>{
localStorage.setItem('token',res.data.token)
clear()
goToLogin(navigate)
	})
	.catch((err)=>{
		alert('Erro no Cadastro')
	})
}

// useEffect(()=>{
// axios.post(url)
// .then((resposta) => {
// 	setData(resposta.data);
// })
// .catch((erro) => {
// 	console.log(erro);
// });
// }, [url]);

// })