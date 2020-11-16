import React, {useState} from 'react';
import './App.css';
import Slider from "./Slider";

/**
 * TODO: Fix collision related bugs and make them dynamic
 */
function App() {
    const min = 0;
    const max = 150;

    const [range, setRange] = useState([ 25, 60 ]);
    const [coloredRailEnabled, setColoredRailEnabled] = useState(true);
    const [snapToEnabled, setSnapToEnabled] = useState(true);
    const [collisionsEnabled, setCollisionsEnabled] = useState(true);

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

    const knobs = [
        { position: 0, type: 'major' },
        { position: 25, type: 'minor' },
        { position: 50, type: 'normal' },
        { position: 75, type: 'minor' },
        { position: 100, type: 'major' },
    ].map(
        knob => {
            if (snapToEnabled) {
                return {
                    ...knob,
                    snapToThreshold: knob.type === 'major' ? 3 : 1
                }
            }
            return knob;
        }
    );

    return (
        <div className="App">
            <div className="SliderContainer">
                <h1 className="SliderContainer_header">Multi-Handled Slider Demo:</h1>
                <Slider
                    values={range}
                    min={min}
                    max={max}
                    knobs={knobs}
                    coloredRail={coloredRailEnabled}
                    collisionsEnabled={collisionsEnabled}
                    onChange={setRange}
                />
                <div className="SliderContainer_body">
                    <hr/>

                    <div className="mb-10"><b>values</b> = [</div>
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

export default App;
