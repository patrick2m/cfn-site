import { Card } from "react-bootstrap"

import img1 from '../../assets/img/about_1.jpg';

import './Cards.scss';

export default function Cards() {
    return(
        <div className="card-container">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img1} />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img1} />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>

            </Card>
            
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img1} />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>

            </Card>
        </div>
    )
}