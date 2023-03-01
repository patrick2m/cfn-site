import './Footer.scss'
import imglogo from '../../assets/img/logoCFN.svg'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Footer() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <footer id="main-footer">
      <div className='footer-menu'>
        <div className='footer-left'>
          <img className="big-logo" src={imglogo} alt="Casa das Fechaduras" />
          <Link className='menu-link' to="/">Início</Link>
          <Link className='menu-link' to="/Sobre">Sobre</Link>
          <Link className='menu-link' to="/Contato">Contato</Link>
        </div>
        <div className='footer-middle'>
          <h2>Casa das Fechaduras de Niterói</h2>
          <p>Rua Marechal Deodoro, 168</p>
          <p>Centro - Niterói, Rio de Janeiro - Brasil</p>
          <p>Telefone : 21 3527 - 3000</p>
        </div>
        <div className='footer-right'>
          <h2>Casa das Fechaduras de São Gonçalo</h2>
          <p>Rua Feliciano Sodré, 57 Loja 1</p>
          <p>Centro - São Gonçalo, Rio de Janeiro - Brasil</p>
          <p>Telefone : 21 2713 - 6161</p>
        </div>
      </div>
      <div className='footer-copy'>
        <h1>
          &copy; Casa das Fechaduras 2023 - Todos os Direitos Reservados - Em desenvolvimento por{' '}
          <a
            href="https://www.linkedin.com/in/patrick2m/"
            target="_blank"
            rel="noreferrer"
          >
          Patrick Machado.
          </a>
        </h1>
      </div>
    </footer>
  )
}
