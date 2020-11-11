import React, {useState} from 'react';
import './App.css';
import Slider from "./Slider";

/**
 * TODO: Handle dynamic # of handles
 * TODO: Handle dynamic setting of colored rail
 * TODO: Handle snap-to knobs
 * TODO: Pass knobs as props
 */
function App() {
    const min = 0;
    const max = 150;
    const [range, setRange] = useState([25, 60]);

    const valueChangeHandler = (newValue, index) => {
        setRange(range.map(
            (val, i) => i === index ? newValue : val
        ));
    }

    const addValueHandler = () => {
        setRange([ ...range, max ]);
    }

    const removeValueHandler = () => {
        setRange(range.slice(0, range.length - 1));
    }

    const valueInputs = range.map((value, i) => (
        <div key={i}>
            <input
                type="text"
                style={{ width: 100, margin: '0 10px 10px 20px' }}
                value={value}
                onChange={e => valueChangeHandler(e.target.value, i)}
            />
            ,
        </div>
    ));

    return (
        <div className="App">
            <div className="SliderContainer">
                <h1 className="SliderContainer_header">Multi-Handled Slider Demo:</h1>
                <Slider
                    values={range}
                    min={min}
                    max={max}
                    knobs={[
                        { position: 0, type: 'major' },
                        { position: 50, type: 'minor' },
                        { position: 100, type: 'major' }
                    ]}
                    onChange={setRange}
                />
                <div className="SliderContainer_body">
                    <hr/>
                    <div className="mb-10"><b>values</b> = [</div>
                    {valueInputs}
                    <div className="mb-10">]</div>
                    <div>
                        <button style={{ marginRight: '10px' }} onClick={addValueHandler}>Add Value</button>
                        <button onClick={removeValueHandler}>Remove Value</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
