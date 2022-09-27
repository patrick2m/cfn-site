import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Intro from './components/Intro'
import Header from './components/partials/Header'
import Footer from './components/partials/Footer'
import Sobre from './components/Sobre'
import Home from './components/Home'
import Contato from './components/Contato'

import './App.scss'

export default function App() {
  return (
    <BrowserRouter>
      <Intro />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/Contato" element={<Contato />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
