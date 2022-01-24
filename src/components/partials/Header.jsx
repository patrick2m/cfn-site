import { Link } from 'react-router-dom';

import './Header.scss';

export default function Header() {
    return (
        <header id="main-header">
            <Link to="/"><img src="logo.png" alt="Casa das Fechaduras" /></Link>
            <ul id="main-menu">
                <li><Link className="menu-link" to="/">Home</Link></li>
                <li><Link className="menu-link" to="/About">Sobre</Link></li>
                <li><Link className="menu-link" to="/Contact">Contato</Link></li>
            </ul>
        </header>
    )
}