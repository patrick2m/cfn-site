import { Link } from 'react-router-dom'

import imglogo from '../../assets/img/logoCFN.svg'
import imglogomin from '../../assets/img/logoCFNmin.svg'
import iconface from '../../assets/img/icons/iconeface.png'
import icontinsta from '../../assets/img/icons/iconeinsta.png'
import iconemail from '../../assets/img/icons/iconemail.png'
import iconplace from '../../assets/img/icons/iconeplace.png'

import './Header.scss'

export default function Header() {
  return (
    <header id="main-header">
      <div className="header-container">
        <div id="menu-logo">
          <Link to="/">
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
              <Link className="menu-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="menu-link" to="/About">
                Sobre
              </Link>
            </li>
            <li>
              <Link className="menu-link" to="/Support">
                Suporte
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
                <img src={iconface} alt="facebook.com/LojaCasaFechaduras/" />
              </div>
            </a>
            <a
              href="https://www.instagram.com/casadasfechaduras/"
              target={'_blank'}
              rel="noreferrer"
            >
              <div>
                <img src={icontinsta} alt="instagram.com/casadasfechaduras/" />
              </div>
            </a>
            <a href="mailto:informatica@casadasfechaduras.com.br?subject=Enviado pelo site">
              <div>
                <img src={iconemail} alt="Email" />
              </div>
            </a>
          </div>
          <div className="local">
            <img src={iconplace} alt="Local" className="imglocal" />
            <span>Niterói e São Gonçalo / RJ</span>
          </div>
        </div>
      </div>
    </header>
  )
}
