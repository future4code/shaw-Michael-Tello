import AdminHomePage from "../components/AdminHomePage";
import ApplicationFormPage from "../components/ApplicationFormPage";
import CreateTripPage from "../components/CreateTripPage";
import HomePage from "../components/HomePage";
import LoginPage from "../components/LoginPage";
import TripDetailsPage from "../components/TripDetailsPage";
import TripsListPage from "../components/TripsListPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route path="/viagens/detalhe/:tripId" element={<TripDetailsPage />} />

        <Route path="/viagens/criar" element={<CreateTripPage />} />

        <Route path="/viagens" element={<TripsListPage />} />

        <Route path="/inscricao" element={<ApplicationFormPage />} />

        <Route index element={<HomePage />} />

        <Route path="*" element={<div>Pagina não encontrada </div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
