import React from 'react';
import Handle from './Handle';
import Knob from "./Knob";
import SliderRail from "./SliderRail";
import './Slider.css';

function sortAsc(numArr) {
    return [...numArr].sort((a, b) => a - b);
}

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.state = { activeHandle: null };
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

    /**
     * Start and stop positions of the colored rail.
     * @returns {number[]|null} - [ startPos, endPos ]
     */
    get coloredRailPositions() {
        if (!this.props.coloredRail || this.handlePositions.length < 1) {
            return null;
        }

        if (this.handlePositions.length === 1) {
            return [ 0, this.handlePositions[0] ];
        } else {
            const sortedHandlePositions = sortAsc(this.handlePositions);
            return [
                sortedHandlePositions[0],
                sortedHandlePositions.slice(-1)
            ];
        }
    }

    get snapToThresholds() {
        return this.props.knobs
            .filter(({ snapToThreshold }) => !isNaN(snapToThreshold) && snapToThreshold > 0)
            .map(({ position, snapToThreshold }) => [ position, snapToThreshold ]);
    }

    // Component methods

    knobIsColored(position) {
        if (this.coloredRailPositions === null) {
            return false;
        }

        const [ startPos, endPos ] = this.coloredRailPositions;

        return startPos <= position && endPos >= position;
    }

    drag(cursorX) {
        if (this.state.activeHandle !== null) {
            const { min, max, onChange } = this.props

            // Convert the cursor's X position from pixels to a percentage of the slider's width
            let valueAsPercent = (cursorX - this.sliderCoordinates.left) / this.sliderLength * 100;

            this.snapToThresholds.forEach(([ position, threshold ]) => {
                const lowerBound = position - threshold;
                const upperBound = position + threshold;
                if (valueAsPercent >= lowerBound && valueAsPercent <= upperBound) {
                    valueAsPercent = position;
                }
            });

            let value;

            if (valueAsPercent < 0) {
                // If slider goes below 0%, set it to min
                value = min;
            } else if (valueAsPercent > 100) {
                // If slider exceeds 100%, set it to the max
                value = max;
            } else {
                // Multiply percentage by max-min range to convert to true numeric value
                value = (valueAsPercent / 100) * this.rangeSize;
            }

            let newValues = [...this.props.values];

            newValues[this.state.activeHandle] = value;

            if (this.props.collisionsEnabled) {
                newValues = sortAsc(newValues);
            }

            onChange(newValues);
        }
    }

    // Event handlers

    setActiveHandle = handleIndex => this.setState({ activeHandle: handleIndex });

    resetActiveHandle = () => this.setState({ activeHandle: null });

    mouseMoveHandler = e => this.drag(e.pageX);

    touchMoveHandler = e => {
        if (e.touches && e.touches.length > 0) {
            this.drag(e.touches[0].pageX);
        }
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

        const knobs = this.props.knobs.map(({ position, type }) => (
            <Knob
                position={position}
                type={type}
                isColored={this.knobIsColored(position)}
                key={`knob_${position}`}
            />
        ));

        return (
            <div className="Slider" ref={this.ref}>
                <SliderRail coloredRailPositions={this.coloredRailPositions} />
                {handles}
                {knobs}
            </div>
        );
    }
}

Slider.defaultProps = {
    coloredRail: true
}

export default Slider;