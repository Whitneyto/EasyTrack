//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
//others
import { Rsample } from '../interfaces/data';

export function Rsam({R}:{R:Rsample}): JSX.Element {
    return <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{R.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{R.data}</Card.Subtitle>
            <Card.Body>{R.comment}</Card.Body>
        </Card.Body>
    </Card>
}