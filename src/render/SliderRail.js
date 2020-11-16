import React from 'react';

function SliderRail({ coloredRailPositions }) {
    let coloredRail = null;

    if (coloredRailPositions !== null) {
        const [ startPos, endPos ] = coloredRailPositions;
        coloredRail = (
            <div className="Slider_rail Slider_rail-colored"
                 style={{ left: `${startPos}%`, right: `${100 - endPos}%` }}
            > </div>
        );
    }

    return (
        <div className="Slider_rail">
            {coloredRail}
        </div>
    );
}

export default SliderRail;