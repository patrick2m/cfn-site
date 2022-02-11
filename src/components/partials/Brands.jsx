import './Brands.scss';

import alianca from '../../assets/img/brands/alianca.png';
import arouca from '../../assets/img/brands/arouca.png';
import haga from '../../assets/img/brands/haga.png';
import intelbras from '../../assets/img/brands/intelbras.png';
import multlock from '../../assets/img/brands/multlock.png';
import pado from '../../assets/img/brands/pado.png';
import papaiz from '../../assets/img/brands/papaiz.png';
import qtmov from '../../assets/img/brands/qtmov.png';
import soprano from '../../assets/img/brands/soprano.png';
import stam from '../../assets/img/brands/stam.png';
import vouga from '../../assets/img/brands/vouga.png';
import yaltres from '../../assets/img/brands/yaltres.png';


export default function Brands() {
    return ( 
        <div id='body-brands'>
            <h1>As melhores marcas pra você!</h1>
            <div id='image-brands'>
                <div className='image-box'> 
                    <img src={alianca} alt="foto padrão" />
                </div>
                <div className='image-box'>
                    <img src={arouca} alt="foto padrão" />
                </div>
                <div className='image-box'>
                    <img src={haga} alt="foto padrão" />
                </div>
                <div className='image-box'>
                    <img src={intelbras} alt="foto padrão" />
                </div>
                <div className='image-box'>
                    <img src={multlock} alt="foto padrão" />
                </div>
                <div className='image-box'>
                    <img src={pado} alt="foto padrão" />
                </div>
                <div className='image-box'>
                    <img src={papaiz} alt="foto padrão" />
                </div>
                <div className='image-box'>
                    <img src={qtmov} alt="foto padrão" />
                </div>
                <div className='image-box'>
                    <img src={soprano} alt="foto padrão" />
                </div>
                <div className='image-box'>
                    <img src={stam} alt="foto padrão" />
                </div>
                <div className='image-box'>
                    <img src={vouga} alt="foto padrão" />
                </div>
                <div className='image-box'>
                    <img src={yaltres} alt="foto padrão" />
                </div>
            </div>
        </div>
    );
} 