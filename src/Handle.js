import React from 'react';
import './Slider.css';

function Handle({ position, onClickStart }) {
    return (
        <div className="Slider_handle"
             style={{ left: `${position}%` }}
             onMouseDown={onClickStart}
             onTouchStart={onClickStart}
        > </div>
    );
}

export default Handle;