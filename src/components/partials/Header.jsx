import { Link } from 'react-router-dom';

import './Header.scss';

export default function Header() {
    return (
        <header id="main-header">
            <Link to="/"><img src="logo.png" alt="Casa das Fechaduras" /></Link>
            <ul id="main-menu">
                <li><Link className="menu-link" to="/">Home</Link></li>
                <li><Link className="menu-link" to="/About">Sobre</Link></li>
            </ul>
            <ul id="main-menu">
                <li><img src="icone_horarios.png" alt="Horário de funcionamento" max-width='10px' /></li>
                <li>
                    <p className="menu-link">Horários de funcionamento:</p>
                    <p className="menu-link">Seg - Sex, 8:00 - 18:00</p>
                    <p className="menu-link">Sab, 8:00 - 13:00</p>
                </li>
            </ul>
            <ul id="main-menu">
                <li>
                    <p className="menu-link">Email : informatica@casadasfechaduras.com.br</p>
                    <p className="menu-link">Telefone : (21) 3527-3000</p>
                </li>
            </ul>
        </header>
    )
}