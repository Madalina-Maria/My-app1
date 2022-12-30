import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import Home from './Home/Home'
import HomeRegister from './Home/HomeRegister'
import HomeLogin from './Home/HomeLogin'
import HomeVizualizareFaraCont from './Home/HomeVizualizareFaraCont'
import HomeAjutor from './Home/HomeAjutor'
import RegisterFermier from './Register/RegisterFermier'
import RegisterPersoana from './Register/RegisterPersoana'
import RegisterAjutor from './Register/RegisterAjutor'
import LoginFermier from './Login/LoginFermier'
import LoginPersoana from './Login/LoginPersoana'
import LoginAjutor from './Login/LoginAjutor'
import VizualizareFermier from './Vizualizare/VizualizareFermier'
import VizualizarePersoana from './Vizualizare/VizualizarePersoana'
import VizualizareAjutor from './Vizualizare/VizualizareAjutor'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='register' element={<HomeRegister />}></Route>
        <Route path='login' element={<HomeLogin />}></Route>
        <Route path='vizualizare' element={<HomeVizualizareFaraCont />}></Route>
        <Route path='ajutor' element={<HomeAjutor />}></Route>
        <Route path='register/fermier' element={<RegisterFermier />}></Route>
        <Route path='register/persoana' element={<RegisterPersoana />}></Route>
        <Route path='register/ajutor' element={<RegisterAjutor />}></Route>
        <Route path='login/fermier' element={<LoginFermier />}></Route>
        <Route path='login/persoana' element={<LoginPersoana />}></Route>
        <Route path='login/ajutor' element={<LoginAjutor />}></Route>
        <Route
          path='vizualizare/fermier'
          element={<VizualizareFermier />}
        ></Route>
        <Route
          path='vizualizare/persoana'
          element={<VizualizarePersoana />}
        ></Route>
        <Route
          path='vizualizare/ajutor'
          element={<VizualizareAjutor />}
        ></Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
