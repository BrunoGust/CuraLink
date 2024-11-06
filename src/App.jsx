import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import SingUp from './pages/SingUp'
import Triaje from './pages/Triaje'
import Profile from './pages/Profile'
import ConsulFrec from './pages/ConsulFrec'
import ProCita from './pages/ProCita'



function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/registro" element={<SingUp />} />
      <Route path="/triaje" element={<Triaje />} />
      <Route path="/perfil" element={<Profile />} />
      <Route path="/consultas-frecuentes" element={<ConsulFrec />} />
      <Route path="/reservar-cita" element={<ProCita />} />
      
    </Routes>
    </>
    
  )
}

export default App
