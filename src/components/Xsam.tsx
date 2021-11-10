//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
//others
import { Xsample } from '../interfaces/data';

export function Xsam({X}:{X:Xsample}): JSX.Element {
    return <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>X Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">data</Card.Subtitle>
        </Card.Body>
    </Card>
}