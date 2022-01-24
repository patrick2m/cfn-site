import { Link } from 'react-router-dom';

import './Header.scss';

export default function Header() {
    return (
        <header id="main-header">
            <img src="logo.png" alt="Casa das Fechaduras" />
            <ul id="main-menu">
                <li><Link className="menu-link" to="/">Home</Link></li>
                <li><Link className="menu-link" to="/sobre">Sobre</Link></li>
                <li><Link className="menu-link" to="/contato">Contato</Link></li>
            </ul>
        </header>
    )
}