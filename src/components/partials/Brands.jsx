import './Brands.scss'

import alianca from '../../assets/img/brands/alianca.png'
import arouca from '../../assets/img/brands/arouca.png'
import haga from '../../assets/img/brands/haga.png'
import intelbras from '../../assets/img/brands/intelbras.png'
import multlock from '../../assets/img/brands/multlock.png'
import pado from '../../assets/img/brands/pado.png'
import papaiz from '../../assets/img/brands/papaiz.png'
import qtmov from '../../assets/img/brands/qtmov.png'
import soprano from '../../assets/img/brands/soprano.png'
import stam from '../../assets/img/brands/stam.png'
import vouga from '../../assets/img/brands/vouga.png'
import yaltres from '../../assets/img/brands/yaltres.png'
import tupai from '../../assets/img/brands/tupai.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

export default function Brands() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section id="brands-container">
      <h1>As melhores marcas pra você!</h1>
      <div id="image-brands" data-aos="fade-up">
        <div className="image-box">
          <a
            href="https://aliancametalurgica.com.br/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={alianca} alt="Aliança" />
          </a>
        </div>
        <div className="image-box">
          <a href="https://www.arouca.com.br/" target="_blank" rel="noreferrer">
            <img src={arouca} alt="Arouca" />
          </a>
        </div>
        <div className="image-box">
          <a href="https://www.haga.com.br/" target="_blank" rel="noreferrer">
            <img src={haga} alt="Haga" />
          </a>
        </div>
        <div className="image-box">
          <a
            href="https://www.intelbras.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={intelbras} alt="Intelbras" />
          </a>
        </div>
        <div className="image-box">
          <a
            href="https://www.multlock.com.br/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={multlock} alt="Mul-T-Lock" />
          </a>
        </div>
        <div className="image-box">
          <a
            href="https://www.lojapado.com.br/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={pado} alt="Pado" />
          </a>
        </div>
        <div className="image-box">
          <a 
            href="https://www.papaiz.com.br/" 
            target="_blank" 
            rel="noreferrer"
          >
            <img src={papaiz} alt="Papaiz" />
          </a>
        </div>
        <div className="image-box">
          <a 
            href="https://qtmov.com.br/" 
            target="_blank" 
            rel="noreferrer"
          >
            <img src={qtmov} alt="QTMov" />
          </a>
        </div>
        <div className="image-box">
          <a
            href="https://www.soprano.com.br/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={soprano} alt="Soprano" />
          </a>
        </div>
        <div className="image-box">
          <a 
            href="https://stam.com.br/" 
            target="_blank" 
            rel="noreferrer"
          >
            <img src={stam} alt="Stam" />
          </a>
        </div>
        <div className="image-box">
          <a 
            href="https://www.tupai.pt/" 
            target="_blank" 
            rel="noreferrer"
          >
            <img src={tupai} alt="TUPAI" />
          </a>
        </div>
        <div className="image-box">
          <a
            href="https://fechadurasvouga.com.br/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={vouga} alt="Vouga" />
          </a>
        </div>
        <div className="image-box">
          <a
            href="https://patrick2m.github.io/cfn-site/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={yaltres} alt="Yaltres" />
          </a>
        </div>
        <div className="image-box gap">
          <h2>E outras</h2>
        </div>
      </div>
    </section>
  )
}
