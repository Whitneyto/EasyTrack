import React, { useState } from 'react';
import './App.css';
import { SampleCol } from './components/SampleCol';
import { Button } from 'react-bootstrap';
import { Psample } from './interfaces/data';

function App() {
  const testSamples : Psample[] = [{name : "P000000", data: "dataP",comment:"comP",coated:[{name:"C000000",data:"dataC",comment:"comC",pressed:[{name:"R000000",data:"dataR",comment:"comR",heated:[{name:"X000000",data:"dataX",comment:"comX"}]}]}]}];
  const [samples,setSamples] = useState<Psample[]>(testSamples);
  return (
    <div className="App">
      <SampleCol samples={samples} setSamples={setSamples}></SampleCol>
    </div>
  );
}

export default App;
