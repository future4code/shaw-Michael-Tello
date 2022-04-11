import axios from 'axios'
import {  BASE_URL , headers} from '../constants/url'


export const getAllPlaylists = (saveData) => {
	axios.get(`${BASE_URL }`,headers)
.then((res)=> saveData(res.data.result.list))
.catch((err)=> console.log(err.response))
}

export const getPlaylistTracks = (url,saveData) =>{
	axios.get(url)
	.then((res)=> saveData(res.data.result.list))
	.catch((err)=>console.log(err.response))
}

