import './Home.scss';
import MapBox from './partials/MapBox';

export default function About() {
    return (
        <main id="main-content">
            <h1 class="big-title">Sobre nós</h1>
            <br />
            <br />
            <p className="main-description">
                Há mais de 60 anos no mercado, somos referência em qualidade e variedade de produtos.
                Somos uma Casa cheia de tradição e boas histórias!
            </p>
            <p className="main-description">
                No mercado desde 1957, seu Isaac, fundador e presidente do grupo Casa das Fechaduras de Niterói, deu início á loja que conhecemos hoje!
            </p>
            <p className="main-description">
                Graças a sua força de vontade e paixão, a loja Casa das Ferramentas existe! 
            </p>
            <p className="main-description">
                Nosso foco é solucionar o problema do cliente e não só vender produtos, 
                causando uma experiência boa e marcante a todos que compram e visitam nossa loja! 
            </p>
            <p className="main-description">
                Se você quiser saber mais detalhes e ouvir nossa história detalhe por detalhe, 
                vamos adorar te receber em nossa loja e poder tomar um café com você! Bem vindo á sua Casa!
            </p>

            <div className="address-info">
                <h2>Endereço:</h2>
                <br></br>
                <p>Rua Marechal Deodoro, Nº 168, Centro - Niterói/RJ</p>
                <p>24030-060</p>
            </div>
            <MapBox />
        </main>
    )
}