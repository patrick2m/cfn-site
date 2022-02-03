import { Link } from 'react-router-dom';

import imglogo from '../../assets/img/logoCFN.png'
import relogio from '../../assets/img/relogio.png'
import icontinsta from '../../assets/img/icons/iconinsta.png'
import iconemail from '../../assets/img/icons/iconemail.png'
import iconplace from '../../assets/img/icons/iconplace.png'

import './Header.scss';

export default function Header() {
    return (
        <header id="main-header">
            <div id="menu">
                <div>
                    <Link to="/"><img src={imglogo} alt="Casa das Fechaduras" /></Link>
                </div>
                <ul>
                    <li><Link className="menu-link" to="/">Home</Link></li>
                    <li><Link className="menu-link" to="/About">Sobre</Link></li>
                    <li><Link className="menu-link" to="/About">Suporte</Link></li>
                </ul>
            </div>



            <div id="horario">
                <img src={relogio} alt="Horários"/>
                <div>
                    <p className="titulo" >Horários de funcionamento:</p>
                    <p>Seg - Sex, 8:00 - 18:00</p>
                    <p>Sab, 8:00 - 13:00</p>
                </div>
            </div>



            <div id="contato">
                <a href="mailto:informatica@casadasfechaduras.com.br?subject=Enviado pelo site">
                    <div>
                        <img src={iconemail} alt="Email" /><span>informatica@casadasfechaduras.com.br</span>
                    </div>
                </a>
                <a href="https://www.instagram.com/casadasfechaduras/">
                    <div>
                        <img src={icontinsta} alt="Instagram" /><span>/casadasfechaduras</span>
                    </div>
                </a>
                <div>
                    <img src={iconplace} alt="Local" /><span>Niterói e São Gonçalo / RJ</span>
                </div>
            </div>


        </header>
    )
}