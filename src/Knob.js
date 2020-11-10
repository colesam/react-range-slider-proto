import React from 'react';
import './Slider.css';

function Knob({ position, handlePositions, type = 'normal' }) {
    const [ leftPos, rightPos ] = handlePositions;
    const colored = leftPos <= position && rightPos >= position;

    const modifierClasses = [
        (type === 'minor') ? 'Slider_knob-minor' : '',
        (colored) ? 'Slider_knob-colored' : ''
    ].join(' ');
    return (
        <div className={`Slider_knob ${modifierClasses}`}
             style={{ left: `${position}%` }}
        > </div>
    );
}

export default Knob;