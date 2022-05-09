import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {FeedPage} from '../pages/FeedPage';
import {LoginPage} from '../pages/LoginPage';
import {RegisterPage} from '../pages/RegisterPage';
import {PostPage} from '../pages/PostPage';
import Header from '../components/Header';


export  const Router = () => {
	return (
		<BrowserRouter>
		 <Header/>
 <Routes>
 <Route index element={ <LoginPage/>} />
 <Route path="/register" element={<RegisterPage/>} />
 <Route path="/feed" element={<FeedPage/>} />
 <Route path="/post" element={<PostPage/>} />
 
 <Route path="*" element={<>Pagina não encontrada </>} />
</Routes>
</BrowserRouter>
);
};
