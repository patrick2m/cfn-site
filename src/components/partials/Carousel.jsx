import { Carousel } from "react-bootstrap";

import img1 from '../../assets/img/carousel_home_1.jpg';
import img2 from '../../assets/img/carousel_home_2.jpg';
import img3 from '../../assets/img/carousel_home_3.jpg';

import './Carousel.scss';

export default function CarouselContainer() {
    return (
        <Carousel slide>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3 className="main-title">Bem-vindo à Casa das Fechaduras</h3>
                <p>Utensílios para a casa é aqui.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3 className="main-title">Localizada no centro de Niterói</h3>
                <p>No centro comercial da cidade, área de fácil acesso para você.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3 className="main-title">Grande variedade de produtos</h3>
                <p>Contamos com mais de 1000 produtos diferentes, para satisfazer o seu pedido.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}