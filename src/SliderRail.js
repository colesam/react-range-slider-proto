import React from 'react';

function SliderRail({ handlePositions }) {
    const [ leftPos, rightPos ] = handlePositions;
    return (
        <div className="Slider_rail">
            <div className="Slider_rail Slider_rail-colored"
                 style={{ left: `${leftPos}%`, right: `${100 - rightPos}%` }}
            > </div>
        </div>
    );
}

export default SliderRail;