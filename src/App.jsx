import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Intro from './components/Intro'
import Header from './components/partials/Header'
import Footer from './components/partials/Footer'
import About from './components/About'
import Home from './components/Home'
import Support from './components/Support'

import './App.scss'

export default function App() {
  return (
    <BrowserRouter>
      <Intro />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sobre" element={<About />} />
        <Route path="/Contato" element={<Support />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
