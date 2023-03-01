import { Link } from 'react-router-dom'

import imglogo from '../../assets/img/logoCFN.svg'
import imglogomin from '../../assets/img/logoCFNmin.svg'
import iconFace from '../../assets/img/icons/iconeface.png'
import iconInsta from '../../assets/img/icons/iconeinsta.png'
import iconEmail from '../../assets/img/icons/iconemail.png'
import iconPlace from '../../assets/img/icons/iconeplace.png'

import './Header.scss'

export default function Header() {
  const email = "mailto:gerente1@casadasfechaduras.com.br?subject=Enviado pelo site";
  
  return (
    <header id="main-header">
      <div className="header-container">
        <div id="menu-logo">
          <Link to="/cfn-site">
            <img className="big-logo" src={imglogo} alt="Casa das Fechaduras" />
            <img
              className="small-logo"
              src={imglogomin}
              alt="Casa das Fechaduras"
            />
          </Link>
        </div>

        <div id="menu-header">
          <ul>
            <li>
              <Link className="menu-link" to="/cfn-site">
                Início
              </Link>
            </li>
            <li>
              <Link className="menu-link" to="/Sobre">
                Sobre
              </Link>
            </li>
            <li>
              <Link className="menu-link" to="/Contato">
                Contato
              </Link>
            </li>
          </ul>
        </div>

        <div id="contato">
          <div className="socials">
            <a
              href="https://www.facebook.com/LojaCasaFechaduras/"
              target={'_blank'}
              rel="noreferrer"
            >
              <div>
                <img src={iconFace} alt="facebook.com/LojaCasaFechaduras/" />
              </div>
            </a>
            <a
              href="https://www.instagram.com/casadasfechaduras/"
              target={'_blank'}
              rel="noreferrer"
            >
              <div>
                <img src={iconInsta} alt="instagram.com/casadasfechaduras/" />
              </div>
            </a>
            <a href={email}>
              <div>
                <img src={iconEmail} alt="Email" />
              </div>
            </a>
          </div>
          <div className="local">
            <img src={iconPlace} alt="Local" className="imglocal" />
            <span>
              <a target='_blank' rel='noreferrer' className='mapsButton' href="https://www.google.com/maps/dir//Casa+das+Fechaduras+-+R.+Mal.+Deodoro,+168+-+Centro,+Niter%C3%B3i+-+RJ,+24030-111,+Brasil/@-22.8897899,-43.1898718,12z/data=!3m1!5s0x9983c0e237802f:0x28aaeb374426f371!4m8!4m7!1m0!1m5!1m1!1s0x9983c0e15a6af9:0x15c342772facf8cc!2m2!1d-43.1198285!2d-22.8898052">
                Niterói
              </a>
              {" "}e{" "} 
              <a target='_blank' rel='noreferrer' className='mapsButton' href="https://www.google.com/maps/dir//Casa+das+Fechaduras+de+S%C3%A3o+Gon%C3%A7alo+-+Rua+Doutor+Fel%C3%ADciano+Sodr%C3%A9+-+Centro,+S%C3%A3o+Gon%C3%A7alo+-+RJ/@-22.8259673,-43.1206134,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9983b88b1b8d7f:0x1a770502acf95a6c!2m2!1d-43.0505179!2d-22.8260234">
               São Gonçalo
              </a> / RJ</span>
          </div>
        </div>
      </div>
    </header>
  )
}
