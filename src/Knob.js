import React from 'react';

function Knob({ position, type, isColored }) {
    const modifierClasses = [
        `Slider_knob-${type}`,
        (isColored) ? 'Slider_knob-colored' : ''
    ].join(' ');

    return (
        <div className={`Slider_knob ${modifierClasses}`}
             style={{ left: `${position}%` }}
        > </div>
    );
}

export default Knob;