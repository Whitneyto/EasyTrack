//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
//others
import { Xsample } from '../interfaces/data';

export function Xsam({X}:{X:Xsample}): JSX.Element {
    return <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{X.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{X.data}</Card.Subtitle>
            <Card.Body>{X.comment}</Card.Body>
        </Card.Body>
    </Card>
}