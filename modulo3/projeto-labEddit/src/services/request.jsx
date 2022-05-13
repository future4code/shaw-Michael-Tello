import axios from 'axios'
import { useEffect,useState } from 'react'
import {BASE_URL} from '../constants/url'


// SECTION
export function GetPostsFeed(size,page) {
const [arrPosts,setArrPosts] = useState([])
const [loading,setLoading] = useState(false)

useEffect(()=>{
	GetPostsAtt(size,page)
},[])

const GetPostsAtt = (size,page,notAtt) => {
	setLoading (notAtt ? false : true)
	const auth = { headers: { Authorization: localStorage.getItem("token") } };
	axios
	.get(`${BASE_URL}/posts?page=${page}&size=${size}`, auth)
.then((res)=>{
	setArrPosts(res.data)
	setLoading(false)
})
.catch((err)=>{
alert('Erro no GetPostsFeed ')
})

return [arrPosts,GetPostsAtt,loading]
}
}

// SECTION
export function CreatePost(form, GetPostsAtt) {

const [msgRequest,setMsgRequest] = useState(false)

const PostPost = () => {
	const auth = { headers: { Authorization: localStorage.getItem("token") } };
	axios
	.post(`${BASE_URL}/posts`, form, auth)
.then((res)=> {
	setMsgRequest(true)
	GetPostsAtt();
})
.catch((err)=>{
	alert('Erro no CreatePost')
	GetPostsAtt();
})

return [msgRequest,PostPost]
}
}


// SECTION
export const PostVote = (id,dir,GetPostsAtt) => {

  const [stateVote, setStateVote] = useState(false);
  const [idVote, setIdVote] = useState(null);

const VoteFunction = (id,dir,GetPostsAtt) => {

	const auth = {headers: {Authorization: localStorage.getItem('token')}}
const body = {
	direction: dir,
}

axios.post(`${BASE_URL}/posts/${id}/votes`,body,auth)
.then((res)=>{
	if (dir === 1) {
		setStateVote('Positive')
		GetPostsAtt(true, true, true);
	} else {
		setStateVote('Negative')
		setIdVote(id)
		GetPostsAtt(true,true,true)
	}
})
.catch((err)=>{
	alert('Erro no PostVote')
});
}
return [stateVote, VoteFunction, idVote];
};

// SECTION
export const DeleteVote = (id,dir,GetPostsAtt) => {

const [stateVoteDel, setStateVoteDel] = useState(false);
const [idVoteDel, setIdVoteDel] = useState(null);

const functionDelete = (id,dir,GetPostsAtt) => {

	const auth = {headers: {Authorization: localStorage.getItem('token')}}
	axios.delete(`${BASE_URL}/posts/${id}/votes`,auth)
	.then((res)=> {
		setStateVoteDel('Delete')
		setIdVoteDel(id);
		GetPostsAtt(true, true, true);
	})
	.catch((err)=>{
		alert('Erro no DeleteVote ')
	});

}

return [stateVoteDel, functionDelete, idVoteDel];

};
















	

}