import React from 'react';

function Handle({ position, isActive, ...props }) {
    return (
        <div
            className={`Slider_handle ${ isActive ? 'Slider_handle-active' : '' }`}
            style={{ left: `${position}%` }}
            draggable="false"
            {...props}
        > </div>
    );
}

export default Handle;