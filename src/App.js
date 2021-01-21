import React, {useState} from 'react';
import Slider from "./slider/Slider";

export default function App() {

    // State hooks
    const [ values, setValues ] = useState([ 25, 75 ]);
    const [ min, setMin ] = useState(0);
    const [ max, setMax ] = useState(100);
    const [ coloredRailEnabled, setColoredRailEnabled ] = useState(true);
    const [ snapToEnabled, setSnapToEnabled ] = useState(false);
    const [ collisionsEnabled, setCollisionsEnabled ] = useState(false);

    // Event handlers
    const valueChangeHandler = (newValue, index) => {
        setValues(values.map(
            (val, i) => i === index ? newValue : val
        ));
    }

    const addValueHandler = () => {
        setValues([ ...values, max ]);
    }

    const removeValueHandler = () => {
        setValues(values.slice(0, values.length - 1));
    }

    // Computed value
    const valueInputs = values.map((value, i) => (
        <div key={i}>
            <input
                type="text"
                style={{ width: 100, margin: '0 5px 10px 20px' }}
                value={value}
                onChange={e => valueChangeHandler(e.target.value, i)}
            />
            ,
        </div>
    ));

    return (
        <div className="Demo Demo-full">
            <div className="SliderContainer">
                <h1 className="SliderContainer_header">Demo:</h1>

                <Slider
                    values={values}
                    min={min}
                    max={max}
                    knobs={[
                        { position: 0, type: 'major', snapToThreshold: 3 },
                        { position: 25, type: 'minor', snapToThreshold: 1 },
                        { position: 50, type: 'normal', snapToThreshold: 1 },
                        { position: 75, type: 'minor', snapToThreshold: 1 },
                        { position: 100, type: 'major', snapToThreshold: 3 },
                    ]}
                    coloredRailEnabled={coloredRailEnabled}
                    collisionsEnabled={collisionsEnabled}
                    snapToEnabled={snapToEnabled}
                    onChange={setValues}
                />

                <div className="SliderContainer_body">
                    <hr/>

                    <div className="mb-20">
                        <b>min</b> =
                        <input
                            type="text"
                            style={{ width: 100, marginLeft: '10px' }}
                            value={min}
                            onChange={e => setMin(parseFloat(e.target.value))}
                        />
                    </div>

                    <div className="mb-20">
                        <b>max</b> =
                        <input
                            type="text"
                            style={{ width: 100, marginLeft: '10px' }}
                            value={max}
                            onChange={e => setMax(parseFloat(e.target.value))}
                        />
                    </div>

                    <div className="mb-10"><b>values</b> = [</div>
                    {valueInputs}
                    <div className="mb-20">]</div>

                    <div className="mb-20">
                        <button style={{ marginRight: '10px' }} onClick={addValueHandler}>Add Value</button>
                        <button onClick={removeValueHandler}>Remove Value</button>
                    </div>

                    <div>
                        <input
                            type="checkbox"
                            id="enableColoredRail"
                            checked={coloredRailEnabled}
                            onChange={() => setColoredRailEnabled(!coloredRailEnabled)}
                        />
                        <label htmlFor="enableColoredRail">Colored Rail Enabled</label>
                    </div>

                    <div>
                        <input
                            type="checkbox"
                            id="enableSnapTo"
                            checked={snapToEnabled}
                            onChange={() => setSnapToEnabled(!snapToEnabled)}
                        />
                        <label htmlFor="enableSnapTo">Snap To Enabled</label>
                    </div>

                    <div>
                        <input
                            type="checkbox"
                            id="enableCollisions"
                            checked={collisionsEnabled}
                            onChange={() => setCollisionsEnabled(!collisionsEnabled)}
                        />
                        <label htmlFor="enableSnapTo">Handle Collisions Enabled</label>
                    </div>
                </div>
            </div>
        </div>
    );
}