import { Link } from 'react-router-dom';

import imglogo from '../../assets/img/logoCFN.png'
import relogio from '../../assets/img/relogio.png'
import icontel from '../../assets/img/icons/icontel.png'
import icontinsta from '../../assets/img/icons/iconinsta.png'
import iconemail from '../../assets/img/icons/iconemail.png'
import iconplace from '../../assets/img/icons/iconplace.png'

import './Header.scss';

export default function Header() {
    return (
        <header id="main-header">
            <div className="menu">
                <div>
                    <Link to="/"><img src={imglogo} alt="Casa das Fechaduras" /></Link>
                </div>
                <ul id="main-menu">
                    <li><Link className="menu-link" to="/">Home</Link></li>
                    <li><Link className="menu-link" to="/About">Sobre</Link></li>
                    <li><Link className="menu-link" to="/About">Suporte</Link></li>
                </ul>
            </div>


            <div className="horario" id='main-menu'>
                <img src={relogio} alt="Horários" style={{ width: '70px', height:'70px' }}/>
                <div>
                    <p>Horários de funcionamento:</p>
                    <p>Seg - Sex, 8:00 - 18:00</p>
                    <p>Sab, 8:00 - 13:00</p>
                </div>
            </div>


            <div className="contato">
                <div>
                    <img src={icontel} alt="telefone" /><span>(21) 3527-3000</span>
                    <img src={icontinsta} alt="Instagram" /><span>/casadasfechaduras</span>
                </div>
                <div>
                    <img src={iconemail} alt="Email" /><span>informatica@casadasfechaduras.com.br</span>
                </div>
                <div>
                    <img src={iconplace} alt="Local" /><span>Niterói e São Gonçalo / RJ</span>
                </div>
            </div>


        </header>
    )
}