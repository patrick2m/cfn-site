import './Gallery.scss';

import imgGalery from '../../assets/img/about_1.jpg';

export default function Gallery() {
    return (
        <div id="gallery-container">
            <div className="gallery">
                    <img src={imgGalery} alt="imagem1" className='item imagem1'/>
                    <img src={imgGalery} alt="imagem2" className='imagem2 item'/>
                    <img src={imgGalery} alt="imagem3" className='imagem3 item'/>
                    <img src={imgGalery} alt="imagem4" className='imagem4 item'/>
                    <img src={imgGalery} alt="imagem5" className='imagem5 item'/>
                    <img src={imgGalery} alt="imagem6" className='imagem6 item'/>
                    <img src={imgGalery} alt="imagem7" className='imagem7 item'/>
                    <img src={imgGalery} alt="imagem8" className='imagem8 item'/>
            </div>
        </div>
    );
} 
