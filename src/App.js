import React, {useState} from 'react';
import './App.css';
import Slider from "./Slider";

/**
 * TODO: Make sliders 'snap' to knobs
 * TODO: Prevent sliders from leaving rail
 * TODO: Color rail only between two sliders
 * TODO: Color rail from start to first slider if only 1 slider
 */

function App() {
    const [range, setRange] = useState([25, 60]);
    return (
        <div className="App">
            <div className="SliderContainer">
                <Slider value={range} min={0} max={100} onChange={setRange} />
            </div>
        </div>
    );
}

export default App;
