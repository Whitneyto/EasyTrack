//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
//others
import { Psample } from '../interfaces/data';

export function Psam({P}:{P:Psample}): JSX.Element {
    return <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{P.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{P.data}</Card.Subtitle>
        </Card.Body>
    </Card>
}