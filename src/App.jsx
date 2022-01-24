import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';

import './App.scss';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}