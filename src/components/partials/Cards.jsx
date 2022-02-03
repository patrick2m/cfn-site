import { Card } from "react-bootstrap"

import img1 from '../../assets/img/about_1.jpg';

import './Cards.scss';

export default function Cards() {
    return(
        <div className="card-container">
            <Card className="card-class">
                <Card.Img variant="top" src={img1} />
                <Card.Body>
                    <Card.Title>Tecnologia de ponta para sua segurança.</Card.Title>
                    <Card.Text>
                        Fechaduras eletrônicas para seu lar.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Clique para saber mais        +</small>
                </Card.Footer>
            </Card>
            
            <Card className="card-class">
                <Card.Img variant="top" src={img1} />
                <Card.Body>
                    <Card.Title>Prezamos pelo seu bem estar.</Card.Title>
                    <Card.Text>
                        Priorizando a sua saúde e conforto.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Clique para saber mais        +</small>
                </Card.Footer>

            </Card>
            
            <Card className="card-class">
                <Card.Img variant="top" src={img1} />
                <Card.Body>
                    <Card.Title>Fazendo história no ramo a decadas.</Card.Title>
                    <Card.Text>
                        Desde 1961 ao seu dispor.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Clique para saber mais        +</small>
                </Card.Footer>

            </Card>
        </div>
    )
}