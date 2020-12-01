import React from 'react';

function Handle({ position, isActive, onClickStart }) {
    return (
        <div className={`Slider_handle ${ isActive ? 'Slider_handle-active' : '' }`}
             style={{ left: `${position}%` }}
             draggable="false"
             onMouseDown={onClickStart}
             onTouchStart={onClickStart}
        > </div>
    );
}

export default Handle;