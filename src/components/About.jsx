import './About.scss';

import img1 from "../assets/img/about_1.jpg";
import MapBox from './partials/MapBox';

export default function About() {
    return (
        <main id="main-content">
            <h2 className="big-title">Sobre nós</h2>

            <div className="article-content">
                <img src={img1} alt="" />
                <p className="main-description">
                    Há mais de 60 anos no mercado, somos referência em qualidade e variedade de produtos.
                    Somos uma casa cheia de tradição e boas histórias!
                </p>
                <p className="description">
                    No mercado desde 1957, seu Isaac, fundador e presidente do grupo Casa das Fechaduras de Niterói, deu início á loja que conhecemos hoje.
                    Graças a sua força de vontade e paixão, a loja Casa das Ferramentas existe!
                </p>
                <p className="description">
                    Nosso foco é solucionar o problema do cliente e não só vender produtos, 
                    causando uma experiência boa e marcante a todos que compram e visitam nossa loja! 
                </p>
                <p className="description">
                    Se você quiser saber mais detalhes e ouvir nossa história detalhe por detalhe, 
                    vamos adorar te receber em nossa loja e poder tomar um café com você! Bem-vindo à sua Casa!
                </p>
            </div>

            <div className="address-info">
                <h2 className="big-title">Endereços</h2>
                <br></br>

                <div className="map-info">
                    <div>
                        <h4 className="big-title big-title-2">Unidade Niterói</h4>
                        <p>Rua Marechal Deodoro, Nº 168, Centro - Niterói/RJ</p>
                        <p>24030-060</p>
                        <MapBox
                            latitude={-22.889737133069602}
                            longitude={-43.119811196483795}
                            zoom={16}
                        />
                    </div>

                    <div>
                        <h4 className="big-title big-title-2">Unidade São Gonçalo</h4>
                        <p>Rua Dr. Felíciano Sodré, Nº 57, Centro - São Gonçalo</p>
                        <p>24440-440</p>
                        <MapBox
                            latitude={-22.826029565201875} 
                            longitude={-43.05057118452541}
                            zoom={17}
                        />
                    </div>
                    
                </div>
            </div>
        </main>
    );
}