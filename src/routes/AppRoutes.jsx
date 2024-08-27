import React from 'react';
import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/Home/HomePage"
import ClassPage from "../pages/Clases/ClassPage"
import NosotrosPage from "../pages/SobreNosotros/NosotrosPage"
import ClubAmigosPage from "../pages/ClubAmigos/ClubAmigosPage"
import GaleriaPage from "../pages/Galeria/GaleriaPage"
import ContactanosPage from "../pages/Contactanos/Contactanos"


const AppRoutes = () => {
    return (
  <Routes>
    <Route path="/"  element={<HomePage />} />
    <Route path="/clases"  element={<ClassPage />} />
    <Route path="/sobreNosotros"  element={<NosotrosPage/>} />
    <Route path="/clubamigos"  element={<ClubAmigosPage/>} />
    <Route path="/galeria"  element={<GaleriaPage/>} />
    <Route path="/contactanos"  element={<ContactanosPage/>} />
  </Routes>
  )
}

export default AppRoutes