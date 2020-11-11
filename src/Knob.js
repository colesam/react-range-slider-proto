import React from 'react';
import './Slider.css';

function Knob({ position, type, coloredRailPositions }) {
    const [ startPos, endPos ] = coloredRailPositions;
    const colored = startPos <= position && endPos >= position;
    const modifierClasses = [
        `Slider_knob-${type}`,
        (colored) ? 'Slider_knob-colored' : ''
    ].join(' ');

    return (
        <div className={`Slider_knob ${modifierClasses}`}
             style={{ left: `${position}%` }}
        > </div>
    );
}

export default Knob;