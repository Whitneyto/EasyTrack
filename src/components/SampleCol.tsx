//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from "react-bootstrap";
//
import { useState } from "react";
import { Psample } from "../interfaces/data";
import { Psam } from './Psam';
import { Csam } from './Csam';
import { Rsam } from './Rsam';
import { Xsam } from './Xsam';

interface iSam {
    samples: Psample[];
    setSamples: (s: Psample[]) => void;
}
export function SampleCol({ samples, setSamples }: iSam): JSX.Element {
    //console.log(samples);
    return <Container>
        <Row>
            {samples.map(P => //map all P
                <Col>
                    <Psam P={P}></Psam> 
                    {P.coated.map(C => //get to C and map all C
                        <Csam C={C}></Csam>)}
                    {P.coated.map(C => //get to C to get to R
                        <Col>
                            {C.pressed.map(R => //get to R and map all R
                                <Rsam R={R}></Rsam>)}
                        </Col>
                    )}
                    {P.coated.map(C => // get to C, get to R 
                        <Col>
                            {C.pressed.map(R => //get to C, get to R then get to X 
                                <Col>
                                    {R.heated.map(X => // get to X then map all X
                                        <Xsam X={X}></Xsam>
                                    )}
                                </Col>
                            )}
                        </Col>
                    )}
                </Col>
            )}
        </Row>
    </Container>
}