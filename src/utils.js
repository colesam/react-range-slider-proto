export const sortAsc = numArr => [...numArr].sort((a, b) => a - b);

export const valueToPosition = (value, min, max) => (value - min) / (max - min) * 100;

export const positionToValue = (position, min, max) => ((position / 100) * (max - min)) + min;