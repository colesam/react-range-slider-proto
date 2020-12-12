import React, {useState} from 'react';
import Slider from "./slider/Slider";

export default function App() {
    const min = 50;
    const max = 150;

    // State hooks
    const [values, setValues] = useState([ 50, 100 ]);
    const [coloredRailEnabled, setColoredRailEnabled] = useState(true);
    const [snapToEnabled, setSnapToEnabled] = useState(true);
    const [collisionsEnabled, setCollisionsEnabled] = useState(true);

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
                    coloredRail={coloredRailEnabled}
                    collisions={collisionsEnabled}
                    onChange={setValues}
                />
                <div className="SliderContainer_body">
                    <hr/>

                    <div className="mb-10"><b>value</b> = [</div>
                    {valueInputs}
                    <div className="mb-10">]</div>

                    <div className="mb-10">
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