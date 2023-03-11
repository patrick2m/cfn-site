import './Intro.scss'

import introimg from '../assets/img/intro-anim.png'

export default function Intro() {
  return (
    <section id="intro-anim">
      <div className="locker-div">
        <img src={introimg} alt="Casa das Fechaduras de Niterói" className="locker-img" />
      </div>
    </section>
  )
}
