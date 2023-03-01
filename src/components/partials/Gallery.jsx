import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './Gallery.scss'

import foto1 from '../../assets/img/gallery/fotogaleria1.webp'
import foto2 from '../../assets/img/gallery/fotogaleria2.webp'
import foto3 from '../../assets/img/gallery/fotogaleria3.webp'
import foto4 from '../../assets/img/gallery/fotogaleria6.webp'
import foto5 from '../../assets/img/gallery/fotogaleria4.webp'
import foto6 from '../../assets/img/gallery/fotogaleria5.webp'
import foto7 from '../../assets/img/gallery/fotogaleria7.webp'
import foto8 from '../../assets/img/gallery/fotogaleria8.webp'
import foto9 from '../../assets/img/gallery/fotogaleria9.webp'

export default function Gallery() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section id="gallery-container" data-aos="fade-up">
      <div className="image-gallery">
        <div className="image-box">
          <img src={foto1} alt="foto padrão" max-width={250} />
        </div>
        <div className="image-box">
          <img src={foto2} alt="foto padrão" max-width={250} />
        </div>
        <div className="image-box">
          <img src={foto3} alt="foto padrão" max-width={250} />
        </div>
        <div className="image-box">
          <img src={foto4} alt="foto padrão" max-width={250} />
        </div>
        <div className="image-box">
          <img src={foto5} alt="foto padrão" max-width={250} />
        </div>
        <div className="image-box">
          <img src={foto6} alt="foto padrão" max-width={250} />
        </div>
        <div className="image-box">
          <img src={foto7} alt="foto padrão" max-width={250} />
        </div>
        <div className="image-box">
          <img src={foto8} alt="foto padrão" max-width={250} />
        </div>
        <div className="image-box desappear">
          <img src={foto9} alt="foto padrão" max-width={250} />
        </div>
      </div>
    </section>
  )
}
