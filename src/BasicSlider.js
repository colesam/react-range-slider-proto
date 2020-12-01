import React from 'react';
import Handle from './render/Handle';
import SliderRail from "./render/SliderRail";

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.state = { activeHandle: null };
    }

    // Component getters

    /**
     * The distance between this slider's minimum and maximum values.
     * @returns {number}
     */
    get rangeSize() {
        return this.props.max - this.props.min;
    }

    /**
     * The handle's positions are a percentage distance down the rail (using css `left: X%`). Need to scale the value
     * from a range of min/max to 0/1 and multiply by 100 for a percent.
     * @returns {number[]}
     */
    get handlePositions() {
        return this.props.value.map(val => ((val - this.props.min) / this.rangeSize * 100));
    }

    render() {
        const handles = this.handlePositions.map((position, handleIndex) => (
            <Handle
                position={position}
                isActive={this.state.activeHandle === handleIndex}
                onClickStart={() => this.setActiveHandle(handleIndex)}
                key={`handle_${handleIndex}`}
            />
        ));

        return (
            <div className="Slider">
                <SliderRail />
                {handles}
            </div>
        );
    }
}

export default Slider;