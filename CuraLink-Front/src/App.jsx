import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SingUp from './pages/SingUp'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/registro" element={<SingUp />} />
      <Route path="/perfil" element={<Profile />} />
      <Route path="/triaje" element={<Triaje />} />
      <Route path="/programar_cita" element={<ProCita />} />
      <Route path="/consulta" element={<ConsulFrec />} />
    </Routes>
  )
}

export default App
