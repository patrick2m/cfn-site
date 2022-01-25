import { Carousel } from "react-bootstrap";

import img1 from '../../assets/img/carousel_home_1.jpg';
import img2 from '../../assets/img/carousel_home_2.jpg';
import img3 from '../../assets/img/carousel_home_3.jpg';

export default function CarouselContainer() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3 className="main-title">Bem-vindo à Casa das Fechaduras.</h3>
                <p>Utensílios para a casa é aqui</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3 className="main-title">Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3 className="main-title">Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}