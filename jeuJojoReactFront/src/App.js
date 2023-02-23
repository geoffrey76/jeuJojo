import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Contact from './pages/Contact';
import APropos from './pages/APropos';
import JeuNombre from './pages/JeuNombre';
import PenduIntro from './pages/PenduIntro';
import JeuPendu from './pages/JeuPendu';
import ColorBallInfo from './pages/ColorBallInfo'; 
import ColorBall from './pages/ColorBall';
import Memory from './pages/Memory';
import Memory1Player from './pages/Memory1Player';
import Memory2PlayersReact from './pages/Memory2PlayersReact';
import './css/jeuJojo.css';


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apropos" element={<APropos />} />
        <Route path="/jeuNombre" element={<JeuNombre />} />
        <Route path="/penduIntro" element={<PenduIntro />} />
        <Route path="/jeuPendu" element={<JeuPendu />} />
        <Route path="/colorBallInfo" element={<ColorBallInfo />} />
        <Route path="/colorBall" element={<ColorBall />} />
        <Route path="/memory" element={<Memory />} />
        <Route path="/memory1Player" element={<Memory1Player />} />
        <Route path="/memory2Players" element={<Memory2PlayersReact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;