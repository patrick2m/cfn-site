import './Gallery.scss';

import imgGalery from '../../assets/img/about_1.jpg';

export default function Gallery() {
    return (
        <div id="gallery-container">
            <div className="galeria">
                <img src={imgGalery} alt="" />
                <img src={imgGalery} alt="" />
                <img src={imgGalery} alt="" />


                <img src={imgGalery} alt="" />
                <img src={imgGalery} alt="" />
                <img src={imgGalery} alt="" />


                <img src={imgGalery} alt="" />
                <img src={imgGalery} alt="" />
                <img src={imgGalery} alt="" />
            </div>

        </div>
    );
}
