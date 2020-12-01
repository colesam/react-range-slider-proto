import React, {useState} from 'react';
import BasicSlider from "./BasicSlider";

function BasicDemo() {
    const min = 50;
    const max = 150;

    // State hooks
    const [value, setValue] = useState([ 50, 100 ]);

    return (
        <div className="Demo BasicDemo">
            <div className="SliderContainer">

                <BasicSlider
                    value={value}
                    min={min}
                    max={max}
                />

            </div>
        </div>
    );
}

export default BasicDemo;
