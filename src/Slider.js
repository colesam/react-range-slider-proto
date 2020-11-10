import React from 'react';
import Handle from './Handle';
import Knob from "./Knob";
import SliderRail from "./SliderRail";
import './Slider.css';

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.activeHandle = null;
        this.ref = React.createRef();
    }

    // Lifecycle hooks

    componentDidMount() {
        document.addEventListener('mousemove', this.mouseMoveHandler);
        document.addEventListener('touchmove', this.touchMoveHandler);
        document.addEventListener('mouseup', this.resetActiveHandle);
        document.addEventListener('touchend', this.resetActiveHandle);
    }

    componentWillUnmount() {
        document.removeEventListener('mousemove', this.mouseMoveHandler);
        document.removeEventListener('touchmove', this.touchMoveHandler);
        document.removeEventListener('mouseup', this.resetActiveHandle);
        document.removeEventListener('touchend', this.resetActiveHandle);
    }

    // Component getters

    /**
     * Coordinates, in pixels, of the slider component in the DOM.
     * @returns {{top: number|null, left: number|null, bottom: number|null, right: number|null}}
     */
    get sliderCoordinates() {
        return this.ref.current !== null
            ? this.ref.current.getBoundingClientRect()
            : { left: null, right: null, top: null, bottom: null };
    }

    /**
     * Length in pixels of the slider component.
     * @returns {number}
     */
    get sliderLength() {
        const { left, right } = this.sliderCoordinates;
        return right - left;
    }

    /**
     * The distance between this slider's minimum and maximum values.
     * @returns {number}
     */
    get rangeSize() {
        return this.props.max - this.props.min;
    }

    /**
     * A handle's position is just its value converted to a percentage (non-decimal) of the slider. If a slider ranges
     * from 0 to 200 and has a value of `[ 50, 125 ]`, then the handlePositions would be `[ 25, 62.5 ]`. This are
     * eventually converted to CSS percentages to position the handles correctly.
     * @returns {number[]}
     */
    get handlePositions() {
        return this.props.values.map(val => val / this.rangeSize * 100);
    }

    // Component methods

    drag(cursorX) {
        if (this.activeHandle !== null) {
            const { min, max, onChange } = this.props

            // Convert the cursor's X position from pixels to a percentage (decimal form) of the slider's width
            const valueAsPercent = (cursorX - this.sliderCoordinates.left) / this.sliderLength;

            let value;

            if (valueAsPercent < 0) {
                // If slider goes below 0%, set it to min
                value = min;
            } else if (valueAsPercent > 1) {
                // If slider exceeds 100%, set it to the max
                value = max;
            } else {
                // Multiply percentage by max-min range to convert to true numeric value
                value = valueAsPercent * this.rangeSize;
            }

            let newValues = [...this.props.values];
            newValues[this.activeHandle] = value;

            onChange(newValues.sort((a, b) => a - b));
        }
    }

    // Event handlers

    setActiveHandle = handle => this.activeHandle = handle;

    resetActiveHandle = () => this.activeHandle = null;

    mouseMoveHandler = e => this.drag(e.pageX);

    touchMoveHandler = e => {
        if (e.touches && e.touches.length > 0) {
            this.drag(e.touches[0].pageX);
        }
    }

    render() {
        return (
            <div className="Slider" ref={this.ref}>
                <SliderRail handlePositions={this.handlePositions} />
                <Handle position={this.handlePositions[0]}
                        onClickStart={() => this.setActiveHandle(0)}
                />
                <Handle position={this.handlePositions[1]}
                        onClickStart={() => this.setActiveHandle(1)}
                />
                <Knob position={0} handlePositions={this.handlePositions} />
                <Knob position={50} handlePositions={this.handlePositions} type="minor" />
                <Knob position={100} handlePositions={this.handlePositions} />
            </div>
        );
    }
}

export default Slider;