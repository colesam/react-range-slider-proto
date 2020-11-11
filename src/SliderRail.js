import React from 'react';

function SliderRail({ coloredRailPositions }) {
    const [ startPos, endPos ] = coloredRailPositions;
    return (
        <div className="Slider_rail">
            <div className="Slider_rail Slider_rail-colored"
                 style={{ left: `${startPos}%`, right: `${100 - endPos}%` }}
            > </div>
        </div>
    );
}

export default SliderRail;