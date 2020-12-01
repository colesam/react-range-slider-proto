import React, {useState} from 'react';
import Slider from "./BasicSlider";

function BasicDemo() {
    // State hooks
    const [value, setValue] = useState([ 50, 100 ]);

    return (
        <div className="Demo BasicDemo">
            <div className="SliderContainer">

                <Slider
                    value={value}
                    min={50}
                    max={150}
                />

            </div>
        </div>
    );
}

export default BasicDemo;
