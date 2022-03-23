import './Gallery.scss'

import foto1 from '../../assets/img/gallery/fotogaleria1.jpg'
import foto2 from '../../assets/img/gallery/fotogaleria2.JPG'
import foto3 from '../../assets/img/gallery/fotogaleria3.png'
import foto4 from '../../assets/img/gallery/fotogaleria6.JPG'
import foto5 from '../../assets/img/gallery/fotogaleria4.JPG'
import foto6 from '../../assets/img/gallery/fotogaleria5.JPG'
import foto7 from '../../assets/img/gallery/fotogaleria7.JPG'
import foto8 from '../../assets/img/gallery/fotogaleria8.jpg'
import foto9 from '../../assets/img/gallery/fotogaleria9.JPG'

export default function Gallery() {
  return (
    <section id="gallery-container">
      <div className="image-gallery">
        <div className="image-box">
          <img src={foto1} alt="foto padrão" />
        </div>
        <div className="image-box">
          <img src={foto2} alt="foto padrão" />
        </div>
        <div className="image-box">
          <img src={foto3} alt="foto padrão" />
        </div>
        <div className="image-box">
          <img src={foto4} alt="foto padrão" />
        </div>
        <div className="image-box">
          <img src={foto5} alt="foto padrão" />
        </div>
        <div className="image-box">
          <img src={foto6} alt="foto padrão" />
        </div>
        <div className="image-box">
          <img src={foto7} alt="foto padrão" />
        </div>
        <div className="image-box">
          <img src={foto8} alt="foto padrão" />
        </div>
        <div className="image-box">
          <img src={foto9} alt="foto padrão" />
        </div>
      </div>
    </section>
  )
}
