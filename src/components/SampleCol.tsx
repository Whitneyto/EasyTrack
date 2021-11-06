//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container } from "react-bootstrap";
//
import { useState } from "react";
import { Psample } from "../interfaces/data";
import { Psam } from './Psam';

interface iSam {
    samples: Psample[];
    setSamples: (s: Psample[]) => void;
}
export function SampleCol({ samples, setSamples }: iSam): JSX.Element {

    return <Container>
        {samples.map(P =>
            <Col>
                <Psam P={P}></Psam>

            </Col>
        )}
    </Container>
}