import axios from "axios";
import { BASE_URL } from "../constants/url";
import { goToFeedPage } from "../routes/coordinatos";


export const  login = (body,clear,navigate, setRightButtonText) => {
	axios
		.post(`${BASE_URL}/users/login`, body)
		.then((res) => {
			localStorage.setItem("token", res.data.token);
			clear();
			goToFeedPage(navigate)
			setRightButtonText('Logout')
		})
		.catch((err) => {
			alert("Erro no Login");
		});
};

export const signUp = (body,clear,navigate,setRightButtonText) => {
	axios.post(`${BASE_URL}/users/signup`, body)
	.then((res)=>{
localStorage.setItem('token',res.data.token)
clear()
goToFeedPage(navigate)
setRightButtonText('Logout')
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