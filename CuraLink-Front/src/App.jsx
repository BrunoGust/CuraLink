import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import SingUp from './pages/SingUp'



function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/registro" element={<SingUp />} />
    </Routes>
    </>
    
  )
}

export default App
