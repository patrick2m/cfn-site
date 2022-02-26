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

export default function Brands() {
  return (
    <div id="body-brands">
      <h1>As melhores marcas pra você!</h1>
      <div id="image-brands">
        <div className="image-box">
          <img src={alianca} alt="Aliança" />
        </div>
        <div className="image-box">
          <img src={arouca} alt="Arouca" />
        </div>
        <div className="image-box">
          <img src={haga} alt="Haga" />
        </div>
        <div className="image-box">
          <img src={intelbras} alt="Intelbras" />
        </div>
        <div className="image-box">
          <img src={multlock} alt="Mul-T-Lock" />
        </div>
        <div className="image-box">
          <img src={pado} alt="Pado" />
        </div>
        <div className="image-box">
          <img src={papaiz} alt="Papaiz" />
        </div>
        <div className="image-box">
          <img src={qtmov} alt="QTMov" />
        </div>
        <div className="image-box">
          <img src={soprano} alt="Soprano" />
        </div>
        <div className="image-box">
          <img src={stam} alt="Stam" />
        </div>
        <div className="image-box">
          <img src={tupai} alt="TUPAI" />
        </div>
        <div className="image-box">
          <img src={vouga} alt="Vouga" />
        </div>
        <div className="image-box">
          <img src={yaltres} alt="Yaltres" />
        </div>
        <div className="image-box">
          <h3>E outras</h3>
        </div>
      </div>
    </div>
  )
}