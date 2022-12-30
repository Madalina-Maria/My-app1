import Home from '@mui/icons-material/Home'
import './App.css'
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

function App() {
  return (
    <div>
      <Home />
      <HomeRegister />
      <HomeLogin />
      <HomeVizualizareFaraCont />
      <HomeAjutor />
      <RegisterFermier />
      <RegisterPersoana />
      <RegisterAjutor />
      <LoginFermier />
      <LoginPersoana />
      <LoginAjutor />
      <VizualizareFermier />
      <VizualizarePersoana />
      <VizualizareAjutor />
    </div>
  )
}

export default App
