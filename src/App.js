import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import HomeRegister from "./pages/Home/HomeRegister";
import HomeLogin from "./pages/Home/HomeLogin";
import HomeVizualizareFaraCont from "./pages/Home/HomeVizualizareFaraCont";
import HomeAjutor from "./pages/Home/HomeAjutor";
import RegisterAjutor from "./pages/Register/RegisterAjutor";
import RegisterFermier from "./pages/Register/RegisterFermier";
import RegisterPersoana from "./pages/Register/RegisterPersoana";
import LoginPersoana from "./pages/Login/LoginPersoana";
import LoginFermier from "./pages/Login/LoginFermier";
import VizualizarePersoana from "./pages/Vizualizare/VizualizarePersoana";
import LoginAjutor from "./pages/Login/LoginAjutor";
import Home from "./pages/Home/Home";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/register" element={<HomeRegister />}></Route>
      <Route path="/login" element={<HomeLogin />}></Route>
      <Route path="/vizualizare" element={<HomeVizualizareFaraCont />}></Route>
      <Route path="/ajutor" element={<HomeAjutor />}></Route>
      <Route path="/register/fermier" element={<RegisterFermier />}></Route>
      <Route path="/register/persoana" element={<RegisterPersoana />}></Route>
      <Route path="/register/ajutor" element={<RegisterAjutor />}></Route>
      <Route path="/login/fermier" element={<LoginFermier />}></Route>
      <Route path="/login/persoana" element={<LoginPersoana />}></Route>
      <Route path="/login/ajutor" element={<LoginAjutor />}></Route>
      <Route
        path="vizualizare/persoana"
        element={<VizualizarePersoana />}
      ></Route>
    </Routes>
  );
}
