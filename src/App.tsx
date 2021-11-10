import React, { useState } from 'react';
import './App.css';
import { SampleCol } from './components/SampleCol';
import { Button, Col, Row } from 'react-bootstrap';
import { Psample } from './interfaces/data';
import { AddSamModal } from './components/AddSamModal';

function App() {
  const [show, setShow] = useState<boolean>(false);
  const testSamples: Psample[] = [
    {
      name: "P000000",
      data: "dataP",
      comment: "comP",
      coated: [
        {
          name: "C000000",
          data: "dataC",
          comment: "comC",
          pressed: [
            {
              name: "R000000",
              data: "dataR",
              comment: "comR",
              heated: [
                {
                  name: "X000000",
                  data: "dataX",
                  comment: "comX"
                }
              ]
            }
          ]
        },
        {
          name: "C111111",
          data: "dataC1",
          comment: "comC1",
          pressed: [
            {
              name: "R111111",
              data: "dataR1",
              comment: "comR1",
              heated: [
                {
                  name: "X111111",
                  data: "dataX1",
                  comment: "comX1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "P222222",
      data: "dataP",
      comment: "comP",
      coated: [
        {
          name: "C000000",
          data: "dataC",
          comment: "comC",
          pressed: [
            {
              name: "R000000",
              data: "dataR",
              comment: "comR",
              heated: [
                {
                  name: "X000000",
                  data: "dataX",
                  comment: "comX"
                }
              ]
            }
          ]
        },
        {
          name: "C111111",
          data: "dataC1",
          comment: "comC1",
          pressed: [
            {
              name: "R111111",
              data: "dataR1",
              comment: "comR1",
              heated: [
                {
                  name: "X111111",
                  data: "dataX1",
                  comment: "comX1"
                }
              ]
            }
          ]
        }
      ]
    }];
  const [samples, setSamples] = useState<Psample[]>(testSamples);
  return (
    <div className="App">
      <Row>
        <Col><div>SEARCH BAR</div></Col>
        <Col><Button onClick={() => setShow(true)}>Add Sample</Button></Col>
      </Row>
      <Row>
        <Col><SampleCol samples={samples} setSamples={setSamples}></SampleCol></Col>
      </Row>
      {show && <AddSamModal show={show} setShow={setShow}></AddSamModal>}
    </div>
  );
}

export default App;
