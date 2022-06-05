import './App.css';
import Box from './components/Box';
import React, { useState } from 'react';
import Slider from '@mui/material/Slider';

const App = () => {
  const [rotate, setRotate] = useState(0);
  const [scale, setScale] = useState(1);
  const [skew, setSkew] = useState(0);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  return (
    <>
      <div className="app">
        <div className="app__controls">
          <div className="app__controlsContainer">
            <h1>
              CSS Transform Generator
            </h1>
            <div className="app__control">
              <p style={{ marginRight: "20px", marginBottom: "5px" }}>Rotate:</p>
              <Slider min={0} max={360} defaultValue={0} onChange={(event, value) => setRotate(value)} style={{ marginLeft: "20px" }} />
              <input type="text" value={rotate + '°'} style={{ height: '30px', width: '50px', margin: "0 10px 5px 10px" }} />
            </div>
            <div className="app__control">
              <p style={{ marginRight: "26px", marginBottom: "5px" }}>Scale:</p>
              <Slider min={0.1} max={2} defaultValue={1} step={0.1} onChange={(event, value) => setScale(value)} style={{ marginLeft: "20px" }} />
              <input type="text" value={scale} style={{ height: '30px', width: '50px', margin: "0 10px 5px 10px" }} />
            </div>
            <div className="app__control">
              <p style={{ marginRight: "27px", marginBottom: "5px" }}>Skew:</p>
              <Slider min={-180} max={180} defaultValue={0} onChange={(event, value) => setSkew(value)} style={{ marginLeft: "20px" }} />
              <input type="text" value={skew + '°'} style={{ height: '30px', width: '50px', margin: "0 10px 5px 10px" }} />
            </div>
            <div className="app__control">
              <p style={{ marginRight: "16px", marginBottom: "5px" }}>Translate X:</p>
              <Slider min={-200} max={200} defaultValue={0} onChange={(event, value) => setX(value)} />
              <input type="text" value={x} style={{ height: '30px', width: '50px', margin: "0 10px 5px 10px" }} />
            </div>
            <div className="app__control">
              <p style={{ marginRight: "16px", marginBottom: "5px" }}>Translate Y:</p>
              <Slider min={-200} max={200} defaultValue={0} onChange={(event, value) => setY(value)} />
              <input type="text" value={y} style={{ height: '30px', width: '50px', margin: "0 10px 5px 10px" }} />
            </div>
          </div>
        </div>
        <Box rotate={rotate} scale={scale} skew={skew} x={x} y={y} />
      </div>
      <h6>Created By @Aryan Garg &copy;2022</h6>
    </>
  )
}

export default App