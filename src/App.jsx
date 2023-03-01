import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react';
import AOS from 'aos';

import Intro from './components/Intro'
import Header from './components/partials/Header'
import Footer from './components/partials/Footer'
import Sobre from './components/Sobre'
import Home from './components/Home'
import Contato from './components/Contato'

import './App.scss'

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, });
  }, [])
  return (
    <BrowserRouter>
      <Intro />
      <Header />
      <Routes>
        <Route path="/cfn-site" element={<Home />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/Contato" element={<Contato />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
