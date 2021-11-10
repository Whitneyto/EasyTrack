//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
//others
import { Csample } from '../interfaces/data';

export function Csam({C}:{C:Csample}): JSX.Element {
    return <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{C.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{C.data}</Card.Subtitle>
            <Card.Body className="mb-2 text-muted">{C.comment}</Card.Body>
        </Card.Body>
    </Card>
}