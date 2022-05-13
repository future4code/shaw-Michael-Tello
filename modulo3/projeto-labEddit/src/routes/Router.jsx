import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { FeedPage } from "../pages/FeedPage";
import { SignUpPage } from "../pages/SignUpPage";
import { PostPage } from "../pages/PostPage";
import {Header} from '../components/Header';

export const Router = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/post/" element={<PostPage />} />

        <Route path="*" element={<>Pagina não encontrada </>} />
      </Routes>
    </BrowserRouter>
  );
};
