import React from 'react';
import Handle from './render/Handle';
import Knob from "./render/Knob";
import SliderRail from "./render/SliderRail";
import {sortAsc} from './utils';

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
     * The handle's positions are a percentage distance down the rail (using css `left: X%`). Need to scale the value
     * from a range of min/max to 0/1 and multiply by 100 for a percent.
     * @returns {number[]}
     */
    get handlePositions() {
        return this.props.value.map(val => ((val - this.props.min) / this.rangeSize * 100));
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

    /**
     * Returns an array of tuples representing positions that can be snapped to (e.g. 25%) and the distance in
     * percentage points that a handle needs to be away from that position in order to snap.
     * @returns {number[][]} - [ position, snapToThreshold ]
     */
    get snapToThresholds() {
        return this.props.knobs
            .filter(({ snapToThreshold }) => !isNaN(snapToThreshold) && snapToThreshold > 0)
            .map(({ position, snapToThreshold }) => [ position, snapToThreshold ]);
    }

    // Component methods

    /**
     * @param {number} position
     * @returns {boolean}
     */
    knobIsColored(position) {
        if (this.coloredRailPositions === null) {
            return false;
        }

        const [ startPos, endPos ] = this.coloredRailPositions;

        return startPos <= position && endPos >= position;
    }

    /**
     * Loop over snapping positions/thresholds to determine if a position needs to snap to a new position.
     * @param {number} position
     * @returns {number} - new position
     */
    calculateSnappedPosition(position) {
        this.snapToThresholds.forEach(([ snapToPos, threshold ]) => {
            const lowerBound = snapToPos - threshold;
            const upperBound = snapToPos + threshold;
            if (position >= lowerBound && position <= upperBound) {
                position = snapToPos;
            }
        });

        return position;
    }

    /**
     * Calculate the new value from a dragged handle's position and call the `onChange` prop.
     * @param {number} cursorX - the x position (in pixels) of the mouse
     */
    drag(cursorX) {
        if (this.state.activeHandle !== null) {
            const { min, max, onChange } = this.props

            // Convert the cursor's X position from pixels to a percentage of the slider's width
            let currentPosition = (cursorX - this.sliderCoordinates.left) / this.sliderLength * 100;

            currentPosition = this.calculateSnappedPosition(currentPosition);

            let value;

            if (currentPosition < 0) {
                // If slider goes below 0%, set it to min
                value = min;
            } else if (currentPosition > 100) {
                // If slider exceeds 100%, set it to the max
                value = max;
            } else {
                // Convert from percentage-based position back to true value
                value = ((currentPosition / 100) * this.rangeSize) + min;
            }

            let newValue = [...this.props.value];

            newValue[this.state.activeHandle] = value;

            if (this.props.collisionsEnabled) {
                newValue = sortAsc(newValue);
            }

            onChange(newValue);
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
    coloredRail: true,
    collisionsEnabled: true
}

export default Slider;